jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 FlugkundenSet in the list
// * All 3 FlugkundenSet have at least one Buchungen

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/schulung/appflights/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/schulung/appflights/test/integration/pages/App",
	"de/schulung/appflights/test/integration/pages/Browser",
	"de/schulung/appflights/test/integration/pages/Master",
	"de/schulung/appflights/test/integration/pages/Detail",
	"de/schulung/appflights/test/integration/pages/Create",
	"de/schulung/appflights/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.schulung.appflights.view."
	});

	sap.ui.require([
		"de/schulung/appflights/test/integration/MasterJourney",
		"de/schulung/appflights/test/integration/NavigationJourney",
		"de/schulung/appflights/test/integration/NotFoundJourney",
		"de/schulung/appflights/test/integration/BusyJourney",
		"de/schulung/appflights/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});