---
title: "Nested Request Throttling in Laravel"
layout: post
tags: [laravel, php]
categories: [Laravel]
---

Let me set the stage first: You have a globally assigned throttle middleware on a specific route group or maybe even assigned directly inside the `RouteServiceProvider` on all routes from a specific file. Then, you try to assign (nest) the throttle middleware inside that group onto a specific route expecting that the global throttle values will be overwritten by the nested values just to be surprised that the route gets locked after fewer requests than specified (more specifically, in the case of a single nested throttle middleware - two times fewer requests than expected).

{% include image.html url="/assets/images/posts/nested-request-throttling-in-laravel/429-error.png" description="Response code 429 after exceeding the limit" %}

I found myself in this scenario and after giving some thought it does make sense - the middleware is called twice so two hits rather than one. (The `X-RateLimit-Remaining` header gets decremented by two rather than one) However, how can we overcome this obstacle?
- We can remove the global throttle middleware and just apply it on all routes we need it. (Quite a bit of repeating indeed)
- Perhaps, we can extend the default throttle middleware and implement some kind of an identifier that we’ll use to differentiate the throttles.

Luckily, Laravel already has a [solution](https://github.com/laravel/framework/pull/28856) for us! It uses the second approach to prefix the various throttles so that we can use them independently. Unfortunately, the documentation doesn’t mention this, however, it is pretty straightforward.

```php
// User can send 1000 requests of any kind in an hour.
Route::prefix('image')->middleware('auth', 'throttle:1000,60')->group(function() {
    // User can download 10 times a minute.
    Route::post('/download', 'ImageController@download')->middleware('throttle:10,1,minute_download');
    // User can search 100 times an hour
    Route::get('/search', 'ImageController@search')->middleware('throttle:100,60,search');
    // Use default throttle, user can send 1000 images in an hour.
    Route::get('/send', 'ImageController@send');
});
```

The route group above wraps three routes inside the `auth` and `throttle` middlewares. These two middlewares can be considered as global to the routes within that group. Depending on the scenario, we might consider applying different throttle values for some of the routes in the group. This is the case with the `/download` and `/search` routes - we want to have a lower request limit for them (in the current case). We achieve this by passing a third argument to the throttle middleware. This is the prefix value that will be used to differentiate them - `throttle:max_requests,period,prefix`.

**This feature has been introduced in Laravel 6.0. For any previous versions, you need to extend the default throttle and implement your own solution.**