// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var v1InventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var v1InventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

//FINISHING PRINTING SHIPMENT
var v1FPShipmentDocumentRouter = require("../src/routers/v1/inventory/finishing-printing/fp-shipment-document-router");
var v1BuyerRouter = require("../src/routers/v1/master/buyer-router");
var v1ProductionOrderRouter = require("../src/routers/v1/sales/production-order-router");
var v1ProductRouter = require("../src/routers/v1/master/product-router");

module.exports = function(server) {
      //INVENTORY
      v1InventoryDocumentRouter().applyRoutes(server,                         "/v1/inventory/inventory-documents");
      v1InventorySummaryRouter().applyRoutes(server,                          "/v1/inventory/inventory-summary"); 
      v1InventoryMovementRouter().applyRoutes(server,                         "/v1/inventory/inventory-movement");

      //FINISHING PRINTING SHIPMENT
      v1FPShipmentDocumentRouter().applyRoutes(server,                        "/v1/inventory/fp-shipment-document");
      v1BuyerRouter().applyRoutes(server,                                     "/v1/master/buyer");
      v1ProductionOrderRouter().applyRoutes(server,                           "/v1/sales/production-order");
      v1ProductRouter().applyRoutes(server,                                   "/v1/master/product");
};