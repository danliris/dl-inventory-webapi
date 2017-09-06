function test(name, path) {
    describe(name, function () {
        require(path);
    });
}


before("initialize server", function (done) {
    var server = require("../server");
    server()
        .then((server) => {
            const apiVersion = '1.0.0';

            var Router = require('restify-router').Router;
            var router = new Router();
            var resultFormatter = require("../src/result-formatter");
            var passport = require('../src/passports/local-passport');

            router.post('/', passport, (request, response, next) => {
                var account = request.user;

                var jwt = require("jsonwebtoken");
                var token = jwt.sign({
                    username: account.username,
                    profile: account.profile,
                    roles: account.roles
                }, process.env.AUTH_SECRET);

                var result = resultFormatter.ok(apiVersion, 200, token);
                response.send(200, result);
            });

            router.applyRoutes(server, "/authenticate");
            server.listen(process.env.PORT, process.env.IP);
            console.log(`server created at ${process.env.IP}:${process.env.PORT}`);

            done();
        });
});


describe('@dl-inventory-webapi', function () {
    this.timeout(2 * 60000);

    //Inventory
    test("/v1/inventory/inventory-document", "./routes/inventory/inventory-document");
    test("/v1/inventory/inventory-summary", "./routes/inventory/inventory-summary");
    test("/v1/inventory/inventory-movement", "./routes/inventory/inventory-movement");
    test("/v1/inventory/fp-shipment-document", "./routes/inventory/finishing-printing/fp-shipment-document");
    test("/v1/inventory/fp-retur-from-buyer", "./routes/inventory/finishing-printing/fp-retur-from-buyer");

    //Master
    test("/v1/master/buyer", "./routes/master/buyer"); 
    test("/v1/master/product", "./routes/master/product"); 
    
    //Sales
    test("/v1/sales/production-order", "./routes/sales/production-order");
});
