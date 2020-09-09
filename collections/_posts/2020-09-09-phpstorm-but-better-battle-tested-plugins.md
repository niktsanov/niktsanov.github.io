---
title: "PhpStorm, But Better! #3 - 📦 Battle Tested Plugins"
layout: post
tags: [phpstorm, tools, php]
categories: ["PhpStorm, But Better"]
---

This is an archive of the third email from the series - ["PhpStorm, But Better!"](http://phpstormbutbetter.com/). In the emails, I'm sharing thoughts, news and more about PhpStorm, so make sure you're not missing anything by signing up for the newsletter! 

In this article, I'll to talk about plugins that I use every day. Small disclaimer, the plugins are rapidly changing and from time to time you'll find yourself switching from one to another for several reasons - performance, ease of use, etc. On top of that, the PhpStorm's team are often introducing new updates in which they implement wanted functionality from the community that makes some plugins obsolete.

PhpStorm comes with a ton of functionality out of the box, and as we experienced in a previous email ([Getting Rid Of The Distractions](/blog/phpstorm-but-better-getting-rid-of-the-distractions)), it might feel a bit too much. However, this also greatly benefits the developer - you don't need to find various plugins and manually set them up to get a common functionality.

The list that I'll present you is nothing out of the ordinary and you've probably used some of the plugins already. Even though it is not a long list, it can help you become more productive which is not only good for you but also your clients.

## Table of contents
### Topic I - Aestetics
- Laravel Development
- Symfony Development
- Extra Plugins
- Fun Plugins To Explore

## Laravel Development
If you are a Laravel developer, you've probably already heard of this plugin. It is an absolute must-have! It doesn't only include autocompletion, but also blade support and easy navigation between files. You can check the whole list of features on the plugin's [homepage](https://plugins.jetbrains.com/plugin/7532-laravel).

The installation is pretty straightforward, you install the plugin inside PhpStorm (`Preferences/Settings > Plugins` and you search for the wanted plugin inside the **Marketplace**'s section) and you activate it per project (`Settings/Preferences > Languages & Frameworks > PHP > Laravel`).

![](/assets/images/posts/phpstorm-but-better-battle-tested-plugins/0.png)

However, to get the full power of it, you need to also install a certain package inside your project. The package is called [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper) and it is maintained by [Barry vd. Heuvel](https://twitter.com/barryvdh?lang=en) (make sure to follow him, he knows a thing or two about Laravel!). [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper), as the name indicates, generates helper files based on your project for better autocompletion. To install the package, head to your terminal, navigate to your project and use composer to install it. `composer require --dev barryvdh/laravel-ide-helper`. Make sure it is only a require-dev dependency, you don't want this on production. Then, you can simply run `php artisan ide-helper:generate` to generate the **_ide_helper.php** file and also add it to **.gitignore** (you don't want potential conflicts when working with other people on the project). The package is fully customisable, you can check the Github's [homepage](https://github.com/barryvdh/laravel-ide-helper) for all of the configurations. What I tend to do to avoid the tedious task of running the command every time I update the packages' list is to add it to the **composer.json** file to [run every time on update](https://github.com/barryvdh/laravel-ide-helper#automatic-phpdoc-generation-for-laravel-facades). Add `@php artisan ide-helper:generate` inside the post-update-cmd.

![](/assets/images/posts/phpstorm-but-better-battle-tested-plugins/1.png)

There are few other commands you can run, namely the `php artisan ide-helper:meta` command that adds support for factory design patterns by generating a **.phpstorm.meta.php** (add it to the **.gitignore** file as well) and the `php artisan ide-helpers:models` command that generates PHPDocs for all of your models (be careful with this one, it needs a working database connection in the **.env** file).

## Symfony Development
Symfony is another great framework for PHP that is well-known. I haven't done any Symfony projects in a while now, however, I can advise you on installing the [Symfony Support](https://plugins.jetbrains.com/plugin/7219-symfony-support/) plugin alongside [PHP Annotations](https://plugins.jetbrains.com/plugin/7320-php-annotations/) (required by Symfony Support). These two combined work like a charm. You still need to enable it per project `Settings/Preferences > Languages & Frameworks > PHP > Symfony`.

## Extra Plugins
The previously mentioned plugins are probably the most important ones you'll need. However, there are still a few additions you can install that will make your PhpStorm's setup that more interesting.

- ​[.gitignore](https://plugins.jetbrains.com/plugin/7495--ignore) - While having this plugin is not that important because editing a .gitignore happens rarely, it still brings value to the table. My favourite feature is the set of templates that you can use when creating a new .gitignore file. All of the templates' rules are based on [Github's template collection](https://github.com/github/gitignore). Another cool feature is the syntax highlighting, even though I don't use it that often.
- ​[.env](https://plugins.jetbrains.com/plugin/9525--env-files-support) files support - Environment variables completion and syntax highlighting. Pretty useful in the long run.

**We'll explore more plugins when I talk about Docker/Vagrant integration and Xdebug.**

## Fun Plugins To Explore
In this section, I want to show you a few plugins that are mainly for fun, however, they can be utilised for learning or even saving time in the long run.

- [​CamelCase](https://plugins.jetbrains.com/plugin/7160-camelcase) - Toggle between different styles - kebab-case, SNAKE_CASE, PascalCase, camelCase, snake_case or space case.
![](/assets/images/posts/phpstorm-but-better-battle-tested-plugins/2.gif)
- ​[Key Promoter](https://plugins.jetbrains.com/plugin/9792-key-promoter-x) - If you are new to the shortcuts game, make sure you install this! As the name says, it will prompt you with the key combinations for actions that you often do. It helped me find combinations that I didn't even know exist.

As I mentioned in the beginning, the list is not that big, however, along the way we'll be exploring various other plugins on top of these.

## Next Time
- How to open files/projects directly from the terminal using a neat command (similar to VS Code's `code` command).
- Understanding the real power of shortcodes.
- Quick file navigation.

[Making It Look Pretty](/blog/phpstorm-but-better-making-it-look-pretty){: .previous-from-series-button}