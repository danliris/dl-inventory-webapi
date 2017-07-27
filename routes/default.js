// INVENTORY
var inventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var inventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var inventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

//FINISHING PRINTING SHIPMENT DOCUMENT
var fpShipmentDocumentRouter = require('../src/routers/v1/inventory/finishing-printing/fp-shipment-document-router');
var buyerRouter = require('../src/routers/v1/master/buyer-router');
var productionOrderRouter = require('../src/routers/v1/sales/production-order-router');
var productRouter = require('../src/routers/v1/master/product-router');

//REPORTS
var fpShipmentDocumentReportRouter = require('../src/routers/v1/inventory/finishing-printing/reports/fp-shipment-document-report-router');

module.exports = function(server) {
      //INVENTORY
      inventoryDocumentRouter().applyRoutes(server,                     "/inventory/inventory-documents");
      inventorySummaryRouter().applyRoutes(server,                      "/inventory/inventory-summary"); 
      inventoryMovementRouter().applyRoutes(server,                     "/inventory/inventory-movement");

      //FINISHING PRINTING SHIPMENT DOCUMENT
      fpShipmentDocumentRouter().applyRoutes(server,                    "/inventory/fp-shipment-document");
      buyerRouter().applyRoutes(server,                                 "/master/buyer");
      productionOrderRouter().applyRoutes(server,                       "/sales/production-order");
      productRouter().applyRoutes(server,                               "/master/product");

      //REPORTS
      fpShipmentDocumentReportRouter().applyRoutes(server,              "/inventory/report/fp-shipment-document");      
};