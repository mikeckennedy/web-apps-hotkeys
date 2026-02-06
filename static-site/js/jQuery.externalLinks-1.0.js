/// <reference path="../Scripts/jquery-1.7.1-vsdoc.js" />
//
// jQuery ExternalLinks Plugin
//
// Created by Michael Kennedy
// http://blog.michaelckennedy.net/about/
// Copyright 2012
//

if (!jQuery) {
	console.log("ERROR: You must include jQuery before you include jQuery.externalLinks.");
}

(function ($) {
	
	$.fn.externalLinks = function () {
		/// <summary>
		///     Modifies all fully-qualified hyperlinks to open in new tabs / windows in the selected element and children.
		/// </summary>
		
		$("a[href^='http']", $(this)).attr('target', '_blank');

		return $(this);
	};
	
})(jQuery);