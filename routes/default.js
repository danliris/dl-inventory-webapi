// INVENTORY
var inventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var inventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var inventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

module.exports = function(server) {
      inventoryDocumentRouter().applyRoutes(server,                    "/inventory/inventory-documents");
      inventorySummaryRouter().applyRoutes(server,                    "/inventory/inventory-summary"); 
      inventoryMovementRouter().applyRoutes(server,                    "/inventory/inventory-movement");
};