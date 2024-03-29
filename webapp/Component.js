sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/ieg/cas/msdc/Exec01/model/models",
	"sap/ui/model/resource/ResourceModel",
], function (UIComponent, Device, models, ResourceModel) {
	"use strict";

	return UIComponent.extend("com.sap.ieg.cas.msdc.Exec01.Component", {

		metadata: {
			manifest: "json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var i18nModel = new ResourceModel({
				bundleName: "com.sap.ieg.cas.msdc.Exec01.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			this.getRouter().initialize();
		},
	});
});