const express =
    require("express");

const router =
    express.Router();


console.log("EMAIL ROUTES FILE LOADED");

const {

    createDraft,

    getAllDrafts,

    deleteDraft,

    generateDraft

} = require(
    "../controllers/emailController"
);

router.post(
    "/emails",
    createDraft
);

router.get(
    "/emails",
    getAllDrafts
);

router.delete(
    "/emails/:id",
    deleteDraft
);


router.post(
    "/emails/generate",
    generateDraft
);




router.post(
    "/emails/generate",
    (req, res) => {

        console.log(
            "GENERATE ROUTE HIT"
        );

        res.json({
            success: true,
            message: "Route Working"
        });

    }
);

module.exports =
    router;