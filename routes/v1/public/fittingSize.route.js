const express = require("express");
const router = express.Router();
const { fittingSizeController } = require("../../../controllers");

const multer = require("multer");
const { Authentication, Authorization } = require("../../../middleware");

// Save Image (if required for FittingSize)
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname); // Optionally add timestamp or unique ID for filename
    },
  }),
}).fields([
  { name: 'image', maxCount: 1 } // Adjust based on your needs
]);

// Create a new Fitting Size
router.post("/create-fitting-size",  fittingSizeController.createFittingSize);
router.get("/fitting-size-list",  fittingSizeController.getFittingSizes);

module.exports = router;
