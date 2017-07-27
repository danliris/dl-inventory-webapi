var Manager = require("dl-module").managers.inventory.finishingPrinting.FPShipmentDocument;
var JwtRouterFactory = require("../../../jwt-router-factory");
var db = require("../../../../db");
var resultFormatter = require("../../../../result-formatter");
const apiVersion = '1.0.0';

var handlePdfRequest = function (request, response, next) {
    var user = request.user;
    var id = request.params.id;
    var manager;
    db.get()
        .then((db) => {
            manager = new Manager(db, user);
            return manager.getSingleByIdOrDefault(id);
        })
        .then((fpShipmentDocument) => {
            var filename = fpShipmentDocument.code;
            manager.getPdf(fpShipmentDocument)
                .then((fpShipmentDocumentBinary) => {
                    response.writeHead(200, {
                        "Content-Type": "application/pdf",
                        "Content-Disposition": `attachment; filename = ${filename}.pdf`,
                        "Content-Length": fpShipmentDocumentBinary.length
                    });
                    response.end(fpShipmentDocumentBinary);
                })
                .catch((e) => {
                    var error = resultFormatter.fail(apiVersion, 400, e);
                    response.send(400, error);
                })
        })
}

function getRouter() {
    var router = JwtRouterFactory(Manager, {
        version: apiVersion,
        defaultOrder: {
            "_updatedDate": -1
        }
    });

    var route = router.routes["get"].find((route) => route.options.path === "/:id");
    var originalHandler = route.handlers[route.handlers.length - 1];
    route.handlers[route.handlers.length - 1] = function (request, response, next) {
        var isPDFRequest = (request.headers.accept || "").toString().indexOf("application/pdf") >= 0;
        if (isPDFRequest) {
            next()
        }
        else {
            originalHandler(request, response, next);
        }
    };
    route.handlers.push(handlePdfRequest);
    return router;
}
module.exports = getRouter;
