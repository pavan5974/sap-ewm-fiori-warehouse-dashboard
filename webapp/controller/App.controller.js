sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ewm.controller.App", {

        onInit: function () {

            this.oRouter =
                this.getOwnerComponent().getRouter();

            this.oRouteMap = {
                "Dashboard": "dashboard",
                "Inbound": "inbound",
                "Putaway": "putaway",
                "Warehouse Tasks": "tasks",
                "Inventory": "inventory",
                "Outbound": "outbound",
                "Picking": "picking",
                "Packing": "packing",
                "Handling Units": "handlingUnits",
                "Alerts": "alerts"
            };

        },

        onNavigationChange: function (oEvent) {

            var oItem =
                oEvent.getParameter("listItem");

            var sTitle =
                oItem.getTitle();

            var sRoute =
                this.oRouteMap[sTitle];

            if (sRoute) {
                this.oRouter.navTo(sRoute);
            }

        }

    });

});