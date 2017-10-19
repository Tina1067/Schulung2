sap.ui.define([
	"de/schulung/appflights/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

/*BaseController leitet sich ab aus der aktuellen app baseController.js*/
/*Hier wird die Verzögerung festgelegt			delay: 0,*/
	return BaseController.extend("de.schulung.appflights.controller.App", {

		onInit: function() {
			var oViewModel,
				fnSetAppNotBusy,
				oListSelector = this.getOwnerComponent().oListSelector,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			oViewModel = new JSONModel({
				busy: true,
				delay: 0,
				itemToSelect: null,
				addEnabled: false

			});
			this.setModel(oViewModel, "appView");

			fnSetAppNotBusy = function() {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};
/*.metadataLoaded gibt ein Java Skript promis zurück
erst wird .metadataLoaded ausgeführt bevor 	.then(fnSetAppNotBusy) ausgeführt wird
Der Request muss erst abgelaufen sein egal ob korrekt oder falsch, erst dann wird die Sperre aufgelöst*/
			this.getOwnerComponent().getModel().metadataLoaded()
				.then(fnSetAppNotBusy);

			// Makes sure that master view is hidden in split app
			// after a new list entry has been selected.
/*wenn geklickt wurde wird der Master , linker Rand ausgeblendet wenn wenig Platz ist*/
			oListSelector.attachListSelectionChange(function() {
				this.byId("idAppControl").hideMaster();
			}, this);

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});