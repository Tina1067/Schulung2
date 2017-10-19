jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/schulung/appflights/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/schulung/appflights/test/integration/pages/App",
	"de/schulung/appflights/test/integration/pages/Browser",
	"de/schulung/appflights/test/integration/pages/Master",
	"de/schulung/appflights/test/integration/pages/Detail",
	"de/schulung/appflights/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.schulung.appflights.view."
	});

	sap.ui.require([
		"de/schulung/appflights/test/integration/NavigationJourneyPhone",
		"de/schulung/appflights/test/integration/NotFoundJourneyPhone",
		"de/schulung/appflights/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});