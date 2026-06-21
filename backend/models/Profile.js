const mongoose =
    require("mongoose");

const profileSchema =
    new mongoose.Schema({

        userId: {
            type:
                mongoose.Schema.Types.ObjectId,
            ref:
                "User",
            required:
                true,
            unique:
                true
        },

        personalInfo: {

            name: String,
            email: String,
            phone: String,
            location: String

        },

        professionalSummary:
            String,

        skills: [String],

        education:
            String,

        experience:
            String,

        preferredRoles:
            [String]

    });

module.exports =
    mongoose.model(
        "Profile",
        profileSchema
    );