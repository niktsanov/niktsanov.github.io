---
title: "PhpStorm, But Better! #1 - Getting Rid Of The Distractions"
layout: post
tags: [phpstorm, tools, php]
categories: ["PhpStorm, But Better"]
---

This is an archive of the first email from the series - ["PhpStorm, But Better!"](http://phpstormbutbetter.com/). In the emails, I'm sharing thoughts, news and more about PhpStorm, so make sure you're not missing anything by signing up for the newsletter! 

I plan to help you improve your PhpStorm workflow by synthesizing useful resources, news, plugins and much more. Over time, your use of the IDE will drastically change and your performance will be significantly improved.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/0.png)

Before I start, I want to present you with a few principles that I enforce when working with the IDE (If you follow Caleb’s amazing newsletter about working with VS Code ([www.makevscodeawesome.com](https://makevscodeawesome.com/)), you might be aware of some of them):

Fewer distractions on the screen, more productive workflow.
The theme and font are important! (I cannot stress this enough! You’re going to be staring at the IDE for hours, you must make it easy on your eyes and brain!)
Shortcodes, shortcodes and more shortcodes! (If you can automate some actions, you should do it. There are many services that we, as developers, use that automate tedious tasks, we should do the same for our IDE).
Don’t rely on your IDE blindly! (You’ll find out what I mean at a later point).
These are the core principles I follow when working with a specific IDE. If you don’t agree with them, that is perfectly fine! Consider this newsletter as an alternative point of view that might be helpful to you as well! The good thing about it, you can apply most of the information here to other JetBrains’s products - Intellij IDEA, WebStorm, PyCharm and more (you can find a list of their products on their [website](https://www.jetbrains.com/products.html)). The beauty of the JetBrain’s ecosystem is that their products are consistent, most of the settings are shared between them, so you can easily find your way. I’m not sponsored to say all of this, just my opinion!

For students and teachers, you can get access to PhpStorm for free! More information can be found on JetBrains' website - or a simple Google search will do the trick as well. However, the purpose of these free licenses is for education only. If you are planning on using it on a commercial project, you'll have to purchase an individual license.

Side note, I cannot express how thankful I am to the amazing PHP community! I’ll try to be as much transparent as possible about the newsletter by sharing statistics that might be helpful for those of you that want to start something similar. You can follow me on Twitter ([@NikolayTsanov](https://twitter.com/NikolayTsanov)) for more of the insights.

Without further ado let's start with the first topic of the newsletter - getting rid of the distractions and styling your IDE (not only for you to look cool in front of your colleagues, but also important for your productivity).

Note: for windows users, some of the shortcodes that I'll reference might be a bit different - when I mention the **Cmd** key, you need to replace it with **Ctrl**. (More on the keymaps between PC and macOS can be found on the Microsoft's [website](https://support.microsoft.com/en-us/help/970299/keyboard-mappings-using-a-pc-keyboard-on-a-macintosh)).

## Table of contents
**Topic I - Aestetics**
- **Removing the Panels and Floating Tools**
- **Moving the Sidebar (Projects Explorer)**
- Picking up a Theme (determine the best theme based on your surrounding)
- Picking up a Font (determine the best font for readability)
- Better Icons

## Removing the Panels and Floating Tools
As I mentioned a few times already, panels are distractions. Hiding them will be more beneficial to you. If you need them, you can always toggle or assign a shortcode for easy access. In PhpStorm, there are plenty of them, most of which you'll probably never use. This is what you'll most probably have at the beginning:

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/1.png)

As you can see, your attention is "hijacked" by the information spilt on your screen. We'll start off by removing the bars (Navigation Bar and Status Bar). Easiest way to do so is by going **View > Appearance > Status Bar**. All of these options are available by also doing **Navigate > Search Everywhere > type "status bar" > Show Status Bar (to off)**.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/2.png)

Great! Now that we have the Status Bar removed, we can also get rid of the Tool Window Bars (**View > Appearance > Tool Window Bar** or **Navigate > Search Everywhere > type "tool window bar" > Hide Tool Window Bar (to on)**).

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/3.png)

It already looks way better than before. However, there are still two panels left. By doing **View > Appearance > Navigation Bar** or **Navigate > Search Everywhere > type "navigation bar" > Show Navigation Bar (to off)** we get rid of a huge portion of the taken space.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/4.png)

Then, we are left with the floating browsers. Let's be honest, probably nobody uses them that often.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/5.png)

They can be removed simply by going to the PhpStorm's settings and deselecting them. **PhpStorm > Preferences > Tools > Web Browsers**, alternatively **File > Settings > Tools > Web Browsers (on Windows and Linux)**.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/6.png)

We finally end up with a clean and distraction-free IDE.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/7.png)

Although, there is still a bit more left. On the bottom part of the window you can see the breadcrumbs. They are considered helpful by many, however, I personally never look at them (so I tend to hide them). It is your decision to make, to hide them you can just do **Navigate > Search Everywhere > type "breadcrumbs" > Show Breadcrumbs (to off)** or **PhpStorm > Preferences > Editor > General > Breadcrumbs > Show breadcrumbs (on macOS)**, alternatively **File > Settings > Editor > General > Breadcrumbs > Show breadcrumbs (on Windows and Linux)**. In the settings, you can see that you have the option where to place them (top or bottom) and for which languages to show them. Completely up to you!

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/8.png)

Now you might ask yourself, "Why didn't he hide the tabs?". I enjoy using the tabs, there are some tricks that we'll explore later in the series on how to limit the number of them and how to easily switch left and right using the keyboard. When working on multiple files, I find myself switching often between them (even with split screen). Using less brainpower to remember which file I have to search and switch to every time I'm working is something that I enjoy and you'll probably notice it as well in the long run.

## Moving the Sidebar (Tool Window or "Project" Explorer)
If you are like me, you're probably toggling the sidebar from time to time. You probably have a shortcode (keymap) that you use all the time (we'll explore this at a later point). What happens when the sidebar is on the left is that it pushes the code every single time you make it visible or hide it. Ideally, you won't need it that often, however, for the times that you actually need it, I prefer to have it on the right side. It is pretty straightforward, **⚙ (Gear Icon) > Move To > Right Top**.

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/9.png)

Then, your IDE starts getting in shape. However, still long way to go! In the next email, we'll explore themes (why you should pick up based on your surrounding), fonts and more!

![](/assets/images/posts/phpstorm-but-better-getting-rid-of-the-distractions/10.png)

## Next Time
I want to keep the reading time relatively small. So some of the topics that I'll cover will be split into multiple parts. Next time, I'll cover:

- Picking up a Theme (determine the best theme based on your surrounding)
- Picking up a Font (determine the best font for readability)
- Better Icons

And we'll slowly start getting into more complex material (PSR-12, shortcodes, settings and more).

## More Useful Materials
- Christoph Rumpel has nicely [illustrated](https://www.youtube.com/watch?v=3SUtEnMj1ws) some of the concepts that I've covered in this email. Make sure to check him out!
- If you want to find more on how to set up PhpStorm with Xdebug & Docker, you can find Derick Rethans's [walkthrough](https://vimeo.com/433218463) interesting. Derick is also the creator of Xdebug, so he's the best person you can find for the job.
- For the people using Laravel's Homestead, Daniel Verner's [post](https://42coders.com/how-to-set-up-debugging-with-phpstorm-and-homestead/) on this topic will be of a good use!
- PhpStorm is known to have some performance issues. Project Lanai is a joint effort between JetBrains and Oracle that looks to solve this. Check Alex Vanderbist's (member of Spatie) [post](https://alexvanderbist.com/2020/enable-early-access-metal-support-for-jetbrains-ides/) on this topic.

You can also be on the list! Make sure you contact me with a link to your work related to PhpStorm. If I find it useful, it will be included in the next email!

## News (Things That You Might Have Missed)
- PhpStorm 2020.1.3 has been released! Mainly bug fixes - make sure you check out the [changelog](https://blog.jetbrains.com/phpstorm/2020/07/phpstorm-2020-1-3-is-released/?fbclid=IwAR3Fvp5o46N0OFfJGlLp9kInWfk9h-VPITwM-By-01zbJlfmyjOSFK3YRDA).
- Support for Psalm is [coming soon](https://blog.jetbrains.com/phpstorm/2020/07/phpstan-and-psalm-support-coming-to-phpstorm/) (probably 2020.3).
- PhpStorm 2020.2 will introduce many cool stuff including PHP 8 Union Types support. Read more on their [blog](https://blog.jetbrains.com/phpstorm/2020/07/phpstorm-2020-2-eap-6-union-nbsp-types-are-here/)!

<blockquote class="twitter-tweet tw-align-center pb-2"><p lang="en" dir="ltr">I only have two elephpants btw, how about you? Share a pic! <a href="https://t.co/AyIHQcT0K6">pic.twitter.com/AyIHQcT0K6</a></p>&mdash; Brent (@brendt_gd) <a href="https://twitter.com/brendt_gd/status/1279056896230645773?ref_src=twsrc%5Etfw">July 3, 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

If you want to get one of these cute elephpants which are not for sale yet. The staff of PhpStorm is sending them to the most active EAPers! So make sure you try the latest builds and give feedback and you might win one!

**I'm really excited to hear what you think about the newsletter. Make sure you drop me a line on [Twitter](https://twitter.com/NikolayTsanov)! I really appreciate spreading the word about this and I'm welcoming all suggestions!**