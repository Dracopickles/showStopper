const router = require("express").Router();
const serviceController = require("../../controllers/serviceProviderController");

// Matches with "/api/books"
router.route("/")
  .get(serviceController.findAll)
  .post(serviceController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(serviceController.findById)
  .put(serviceController.update)
  .delete(serviceController.remove);

module.exports = router;
