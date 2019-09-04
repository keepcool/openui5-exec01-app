sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"../model/formatter"
], function (Controller, Filter, FilterOperator, formatter) {
	"use strict";

	return Controller.extend("com.sap.ieg.cas.msdc.Exec01.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
		},
		onFilterInvoices: function(oEvent){
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if(sQuery){
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
			});
		}
	});
});