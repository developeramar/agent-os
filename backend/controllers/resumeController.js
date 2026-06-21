const { analyzeResume } = require("../agent/resumeAI");
const resumeAgent = require("../agent/resumeAgent");
const fs = require("fs");

const {
    buildProfile
} = require("../agent/profileAgent");

console.log("RESUME CONTROLLER LOADED");

exports.uploadResume = async (req, res) => {

    console.log("CONTROLLER START");

    try {

        console.log("========== STEP 1 ==========");
        console.log(req.file);

        const filePath = req.file.path;

        console.log("========== STEP 2 ==========");
        console.log(filePath);

        const resumeText =
            await resumeAgent.extractResumeText(filePath);

        console.log("========== STEP 3 ==========");
        console.log(resumeText.substring(0, 500));

        const analysis =
            await analyzeResume(resumeText);

        console.log("========== STEP 4 ==========");
        console.log("Gemini Completed");

        const aiProfile =
            JSON.parse(analysis);

        const profile =
            buildProfile(aiProfile);

        console.log("========== PROFILE ==========");
        console.log(profile);

        const Profile =
            require(
                "../models/Profile"
            );

        await Profile.findOneAndUpdate(

            {
                userId:
                    req.user.userId
            },

            {
                userId:
                    req.user.userId,

                ...profile
            },

            {
                upsert: true,
                new: true
            }

        );

        await User.findByIdAndUpdate(

            req.user.userId,

            {
                resumeUploaded:
                    true,

                profileCompleted:
                    true
            }

        );

        console.log(
            "========== PROFILE SAVED =========="
        );


        res.status(200).json({
            success: true,
            profile
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};