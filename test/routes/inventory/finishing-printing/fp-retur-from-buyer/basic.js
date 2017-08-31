 var basicTest = require("../../../basic-test-factory");
 basicTest({
     uri: "/inventory/fp-retur-fr-byr-docs",
     model: require("dl-models").inventory.finishingPrinting.FPReturFromBuyerDoc,
     validate: require("dl-models").validator.inventory.finishingPrinting.fpReturFromBuyerDoc,
     util: require("dl-module").test.data.inventory.finishingPrinting.fpReturFromBuyerDoc,
     keyword: null
 });