 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/inventory/inventory-movement",
     model: require("dl-models").inventory.InventoryMovement,
     validate: require("dl-models").validator.inventory.inventoryMovement,
     util: require("dl-module").test.data.inventory.inventoryMovement,
     keyword: null
 });
 