// INVENTORY
var inventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');

module.exports = function(server) {
      inventoryDocumentRouter().applyRoutes(server,                    "/inventory/inventory-document"); 
};