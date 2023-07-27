const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/:model", middlewares.validateModel, controllers.list);

router.get("/:model/:id", middlewares.validateModel, controllers.get);

router.post("/:model", controllers.create);

module.exports = router;
