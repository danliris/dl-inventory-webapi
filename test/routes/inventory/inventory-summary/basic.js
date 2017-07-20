 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/inventory/inventory-summary",
     model: require("dl-models").inventory.InventorySummary,
     validate: require("dl-models").validator.inventory.inventorySummary,
     util: require("dl-module").test.data.inventory.inventorySummary,
     keyword: null
 });
 