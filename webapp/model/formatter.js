sap.ui.define([],function () {
	"use strict";
	
	return {
		statusText: function (sStatus) {
			switch (sStatus) {
				case "A":
					return "New";
				case "B":
					return "In Process";
				case "C":
					return "Done";
				default:
					return sStatus;
			}
		}
	};

});