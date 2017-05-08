 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/master/inventory-document",
     model: require("dl-models").inventory.InventoryDocument,
     validate: require("dl-models").validator.inventory.inventoryDocument,
     util: require("dl-module").test.data.inventory.inventoryDocument,
     keyword: null
 });
 