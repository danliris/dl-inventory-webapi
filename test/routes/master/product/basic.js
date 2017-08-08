 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/master/buyer",
     model: require("dl-models").master.Product,
     validate: require("dl-models").validator.master.product,
     util: require("dl-module").test.data.master.product,
     keyword: null
 });
 