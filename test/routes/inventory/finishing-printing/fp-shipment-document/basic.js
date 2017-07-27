 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/inventory/fp-shipment-document",
     model: require("dl-models").inventory.finishingPrinting.FPShipmentDocument,
     validate: require("dl-models").validator.inventory.finishingPrinting.fpShipmentDocument,
     util: require("dl-module").test.data.inventory.inventoryDocument,
     keyword: null
 });
 