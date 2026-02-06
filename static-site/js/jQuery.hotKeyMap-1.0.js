/// <reference path="~/Scripts/jquery-2.1.0.js" />
/// <reference path="~/js/jquery.hotkeys-0.8.js" />
//
// jQuery MapHotKeys Plugin
//
// Created by Michael Kennedy
// https://github.com/mikeckennedy/web-apps-hotkeys
// Copyright 2012
//
// Built upon the hotkeys plugin by John Resig (https://github.com/jeresig/jquery.hotkeys)
// Be sure to include jquery.hotkeys.js first!
//

if (!jQuery) {
	console.log("ERROR: You must include jQuery before you include jQuery.mapHotKeys.");
}
if (!jQuery.hotkeys && console) {
	console.log("ERROR: You must include jQuery.hotkeys before you include jQuery.mapHotKeys.");
}

(function($) {
	$.fn.mapHotKeys = function(data) {
		/// <summary>
		///     Associates a set of hotkeys with corresponding actions.
		/// </summary>
		/// <param name="data" type="array">
		///     An array of the shape [ {key, action}, {key, action}, {key, action} ]
		/// </param>

		var source$ = $(this);

		$(data).each(function (index, item) {

			var key = item.key;
			var action = item.action;
			
			source$.bind('keydown', key, function (e) {
				action(item);
				
				if (item.isSequence !== true) {
					$(".pending_key").remove();
				}

				e.preventDefault();
				return false;
			});
			
		});

		return $(this);
	};

	$.mapHotKeys = {};

	var clearActionKeyOnMismatch = function(key1, key2, source) {
		$(source).bind('keypress', null, function(e) {

			if (e.which != key2) {
				$(".pending_key").remove();
			}

			return true;
		});
	};
	
	var setDefferedKeyAction = function (key1, key2, source, act) {
		var id = "__mapHotKeys__pending_key__" + key1 + "_" + key2;
		clearActionKeyOnMismatch(key1, key2, source);
		var defferedHolder = $("#" + id);
		
		if (defferedHolder.length === 0) {
			defferedHolder = $("<div class='pending_key' style='display: none' id='" + id + "'><div>");
			$("body").append(defferedHolder);
		}

		defferedHolder.data("key", key1);
		

		$(source).mapHotKeys([{
			key: key2,
			action: function (item) {
				var nextDefferedHolder = $("#" + id);
				var lastKey = nextDefferedHolder.data("key");
				nextDefferedHolder.data("key", "");
				
				if (lastKey === key1) {
					act(item);
					$(".pending_key").remove();
				}
			} }]);
	};
	
	$.mapHotKeys.createSequence = function (key1, key2, source, actionMethod) {
		/// <summary>
		///     Creates a hotkey mapping for a sequence of keys (e.g. press g, then i -> action).
		/// </summary>
		/// <param name="key1" type="string">
		///     The first key to press (and release) in the sequence.
		/// </param>
		/// <param name="key2" type="string">
		///     The second key to press (and release) in the sequence.
		///     This key triggers the action.
		/// </param>
		/// <param name="source" type="DOM object">
		///     The area of the DOM where the hotkey should be active.
		/// </param>
		/// <param name="actionMethod" type="function">
		///     The method to run when the action is triggered.
		/// </param>


		var pair = {
			key: key1,
			isSequence: true,
			action: function (item) { setDefferedKeyAction(key1, key2, source, actionMethod); }
		};

		return pair;
	};
	
})(jQuery);
