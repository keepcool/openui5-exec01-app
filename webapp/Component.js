sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/ieg/cas/msdc/Exec01/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (UIComponent, Device, models, JSONModel, ResourceModel, HelloDialog) {
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
			
			//
			//Set data model on view
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			var i18nModel = new ResourceModel({
				bundleName: "com.sap.ieg.cas.msdc.Exec01.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			this._helloDialog = new HelloDialog(this.getRootControl());
			this.getRouter().initialize();
		},
		exit : function(){
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog : function(){
			this._helloDialog.open();
		}
	});
});