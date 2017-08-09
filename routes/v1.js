// INVENTORY
var v1InventoryDocumentRouter = require('../src/routers/v1/inventory/inventory-document-router');
var v1InventorySummaryRouter = require('../src/routers/v1/inventory/inventory-summary-router');
var v1InventoryMovementRouter = require('../src/routers/v1/inventory/inventory-movement-router');

//FINISHING PRINTING SHIPMENT
var v1FPShipmentDocumentRouter = require("../src/routers/v1/inventory/finishing-printing/fp-shipment-document-router");
var v1BuyerRouter = require("../src/routers/v1/master/buyer-router");
var v1ProductionOrderRouter = require("../src/routers/v1/sales/production-order-router");
var v1ProductRouter = require("../src/routers/v1/master/product-router");

//REPORTS
var v1FPShipmentDocumentReportRouter = require("../src/routers/v1/inventory/finishing-printing/reports/fp-shipment-document-report-router");
var v1FPReturToQCDocReportRouter = require('../src/routers/v1/inventory/finishing-printing/reports/fp-retur-to-qc-doc-report-router');

//RETUR to QC
var v1fpReturToQCDocRouter = require('../src/routers/v1/inventory/finishing-printing/fp-retur-to-qc-doc-router');
var v1productByProductionOrderRouter = require('../src/routers/v1/inventory/finishing-printing/product-by-production-order-router');


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

      //REPORTS
      v1FPShipmentDocumentReportRouter().applyRoutes(server,                  "/v1/inventory/reports/fp-shipment-document");
      v1FPReturToQCDocReportRouter().applyRoutes(server,                      "/v1/inventory/reports/fp-retur-to-qc-docs");  

      //RETUR to QC
      v1fpReturToQCDocRouter().applyRoutes(server,                            "/v1/inventory/fp-retur-to-qc-docs");
      v1productByProductionOrderRouter().applyRoutes(server,                  "/v1/inventory/products-by-production-orders");
};