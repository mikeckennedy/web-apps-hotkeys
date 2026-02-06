$(document).ready(function() {

	$(document).externalLinks();

	var showPane = function (pair) {
		$("#mainContentArea").css("margin-left", "210px");
		$("#sideBar").fadeIn(400);
	};

	var hidePane = function (pair) {
		$("#sideBar").fadeOut(400, null, function () {
			$("#mainContentArea").css("margin-left", "10px");
		});
	};

	var newSong = function (pair) {
		$("#addSong").fadeIn(750);
		$("#addSong input").first().focus();
	};

	var getKey = function (baseName) {
		var key = $("#" + baseName + "Key").data("key");
		return key;
	};

	var navTo = function (pair) {
		$(".navKey").each(function(index, item) {
			if ($(item).data("key") === pair.key) {
				window.location = $(item).data("url");
				return false;
			}
		});
	};

	$(document).mapHotKeys(
		[
			{ key: 'ctrl+a', action: newSong },

			$.mapHotKeys.createSequence("g", getKey("home"), $(document), navTo),
			$.mapHotKeys.createSequence("g", getKey("about"), $(document), navTo),
			$.mapHotKeys.createSequence("g", getKey("contact"), $(document), navTo),

			$.mapHotKeys.createSequence("p", "h", $(document), hidePane),
			$.mapHotKeys.createSequence("p", "s", $(document), showPane)
		]);
});
