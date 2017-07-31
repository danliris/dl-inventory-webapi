// INVENTORY
var inventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var inventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var inventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

//RETUR To QC
var fpReturToQCDocRouter = require('../src/routers/v1/inventory/fp-retur-to-qc-doc-router');
var productByProductionOrderRouter = require('../src/routers/v1/inventory/product-by-production-order-router');

module.exports = function(server) {
      inventoryDocumentRouter().applyRoutes(server,                    "/inventory/inventory-documents");
      inventorySummaryRouter().applyRoutes(server,                    "/inventory/inventory-summary"); 
      inventoryMovementRouter().applyRoutes(server,                    "/inventory/inventory-movement");

      //RETUR To QC
      fpReturToQCDocRouter().applyRoutes(server,                       "/inventory/fp-retur-to-qc-docs");
      productByProductionOrderRouter().applyRoutes(server,             "/inventory/products-by-production-orders");
};