// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');

module.exports = function(server) {
      v1InventoryDocumentRouter().applyRoutes(server,                    "/v1/inventory/inventory-documents"); 
};