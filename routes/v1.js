// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var v1InventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var v1InventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

module.exports = function(server) {
      v1InventoryDocumentRouter().applyRoutes(server,                    "/v1/inventory/inventory-documents");
      v1InventorySummaryRouter().applyRoutes(server,                    "/v1/inventory/inventory-summary"); 
      v1InventoryMovementRouter().applyRoutes(server,                    "/v1/inventory/inventory-movement");
};