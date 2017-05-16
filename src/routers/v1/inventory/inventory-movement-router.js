var Manager = require("dl-module").managers.inventory.InventoryMovementManager;
var JwtRouterFactory = require("../../jwt-router-factory");
var Router = require("restify-router").Router;
var db = require("../../../db");
var resultFormatter = require("../../../result-formatter");
const apiVersion = '1.0.0';

var passport = require("../../../passports/jwt-passport");

function getRouter() {
    var options = {
        version: apiVersion,
        defaultOrder: {
            "_updatedDate": -1
        }
    };

    var router = JwtRouterFactory(Manager, options);

    var defaultOrder = options.defaultOrder || {};
    var defaultFilter = options.defaultFilter || {};
    var defaultSelect = options.defaultSelect || [];

    var getManager = (user) => {
        return db.get()
            .then((db) => {
                return Promise.resolve(new Manager(db, user));
            });
    };

    router.get("/generate/excel", passport, function(request, response, next) {
        var user = request.user;
        var query = request.query;
        var tManager;
        var info = {
            dateFrom : query.dateFrom,
            dateTo : query.dateTo
        };

        query.filter = Object.assign({}, query.filter, typeof defaultFilter === "function" ? defaultFilter(request, response, next) : defaultFilter, query.filter);
        query.order = Object.assign({}, query.order, typeof defaultOrder === "function" ? defaultOrder(request, response, next) : defaultOrder, query.order);
        query.select = query.select ? query.select : typeof defaultSelect === "function" ? defaultSelect(request, response, next) : defaultSelect;

        getManager(user)
            .then((manager) => {
                tManager = manager;
                return tManager.getMovementReport(info);
            })
            .then(docs => {
                var result = resultFormatter.ok(apiVersion, 200, docs.data);
                delete docs.data;
                result.info = docs;
                return Promise.resolve(result);
            })
            .then((result) => {
                
                    tManager.getXls(result)
                        .then(xls => {
                            response.xls(xls.name, xls.data, xls.options);
                        });
                
            })
            .catch((e) => {
                var statusCode = 500;
                if (e.name === "ValidationError")
                    statusCode = 400;
                var error = resultFormatter.fail(apiVersion, statusCode, e);
                response.send(statusCode, error);
            });
    });

    router.get("/get/search", passport, function(request, response, next) {
        var user = request.user;
        var query = request.query;
        var info = {
            dateFrom : query.dateFrom,
            dateTo : query.dateTo
        };

        query.filter = Object.assign({}, query.filter, typeof defaultFilter === "function" ? defaultFilter(request, response, next) : defaultFilter, query.filter);
        query.order = Object.assign({}, query.order, typeof defaultOrder === "function" ? defaultOrder(request, response, next) : defaultOrder, query.order);
        query.select = query.select ? query.select : typeof defaultSelect === "function" ? defaultSelect(request, response, next) : defaultSelect;

        getManager(user)
            .then((manager) => {
                return manager.getMovementReport(info);
            })
            .then(docs => {
                var result = resultFormatter.ok(apiVersion, 200, docs.data);
                delete docs.data;
                result.info = docs;
                return Promise.resolve(result);
            })
            .then((result) => {
                    response.send(result.statusCode, result);
            })
            .catch((e) => {
                var statusCode = 500;
                if (e.name === "ValidationError")
                    statusCode = 400;
                var error = resultFormatter.fail(apiVersion, statusCode, e);
                response.send(statusCode, error);
            });
    });

    return router;
}

module.exports = getRouter;