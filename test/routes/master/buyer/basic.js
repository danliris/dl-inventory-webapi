 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/master/buyer",
     model: require("dl-models").master.Buyer,
     validate: require("dl-models").validator.master.buyer,
     util: require("dl-module").test.data.master.buyer,
     keyword: null
 });
 