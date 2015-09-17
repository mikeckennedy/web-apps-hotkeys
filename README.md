Web apps hot keys jQuery plugin
================

This project manages my jQuery HotKeys for web apps plugin which is described in these 
blog posts:

* [http://blog.michaelckennedy.net/2012/03/15/add-hot-keys-to-web-apps-with-this-jquery-plugin/](http://blog.michaelckennedy.net/2012/03/15/add-hot-keys-to-web-apps-with-this-jquery-plugin/)
* [http://blog.michaelckennedy.net/2012/04/04/no-you-dont-need-a-windows-app/](http://blog.michaelckennedy.net/2012/04/04/no-you-dont-need-a-windows-app/)

See it live here:

[http://web-apps-hotkeys.azurewebsites.net/](http://web-apps-hotkeys.azurewebsites.net/)

Get the plugin here:

**Bower**: bower install jquery.hotkeysmap

**Download**: [https://github.com/mikeckennedy/web-apps-hotkeys/tree/master/src/jslib](https://github.com/mikeckennedy/web-apps-hotkeys/tree/master/src/jslib)

jQuery.hotKeyMap.js is jQuery plugin that allows you to add complex hot-key 
functionality and navigation to your web apps with very little effort.

It's built on top of John Resig's [jQuery.hotKeys](https://github.com/jeresig/jquery.hotkeys). His plugin is great 
(as you'd expect), but as far as I know doesn't support complex series of keys. 
For example, if you want to GMail style navigation (press 'g' then press 't' 
to go to sent mail), that's fairly difficult using his plugin. Here's how you 
accomplish this with my plugin:

