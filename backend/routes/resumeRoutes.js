const express = require("express");
const multer = require("multer");

console.log("RESUME ROUTES LOADED");
const router = express.Router();

const {
    uploadResume
} = require("../controllers/resumeController");

const upload = multer({
    dest: "uploads/"
});

const auth =
    require(
        "../middleware/authMiddleware"
    );

router.post(

    "/upload",

    auth,

    upload.single(
        "resume"
    ),

    uploadResume

);

module.exports = router;