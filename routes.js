const express = require("express");
const router = express.Router();
const homeController = require("./controllers/home");
const imageController = require("./controllers/image");

router.get("/", homeController.renderHomePage);
router.get("/image/:imageId", imageController.renderImagePage);
router.post("/uploadImage", imageController.submitImage);
router.post("/postComment", imageController.submitComment);

module.exports = router;
