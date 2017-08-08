 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/sales/production-order",
     model: require("dl-models").sales.ProductionOrder,
     validate: require("dl-models").validator.sales.productionOrder,
     util: require("dl-module").test.data.sales.productionOrder,
     keyword: null
 });
 