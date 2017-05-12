// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var v1InventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');

module.exports = function(server) {
      v1InventoryDocumentRouter().applyRoutes(server,                    "/v1/inventory/inventory-documents");
      v1InventorySummaryRouter().applyRoutes(server,                    "/v1/inventory/inventory-summary"); 
};