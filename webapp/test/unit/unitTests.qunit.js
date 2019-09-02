/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/ieg/cas/msdc/Exec01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});