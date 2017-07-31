// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var v1InventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var v1InventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

//RETUR to QC
var v1fpReturToQCDocRouter = require('../src/routers/v1/inventory/fp-retur-to-qc-doc-router');
var v1productByProductionOrderRouter = require('../src/routers/v1/inventory/product-by-production-order-router');

module.exports = function(server) {
      v1InventoryDocumentRouter().applyRoutes(server,                    "/v1/inventory/inventory-documents");
      v1InventorySummaryRouter().applyRoutes(server,                    "/v1/inventory/inventory-summary"); 
      v1InventoryMovementRouter().applyRoutes(server,                    "/v1/inventory/inventory-movement");

      //RETUR to QC
      v1fpReturToQCDocRouter().applyRoutes(server,                         "/v1/inventory/fp-retur-to-qc-docs");
      v1productByProductionOrderRouter().applyRoutes(server,               "/v1/inventory/products-by-production-orders");
    
};