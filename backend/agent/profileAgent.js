function buildProfile(aiProfile) {

    return {

        personalInfo: {

            name:
                aiProfile.name || "",

            email:
                aiProfile.email || "",

            phone:
                aiProfile.phone || "",

            location:
                aiProfile.location || ""

        },

        professionalSummary:
            aiProfile.professionalSummary || "",

        skills:
            aiProfile.skills || [],

        experience:
            aiProfile.experience || "",

        education:
            aiProfile.education || "",

        preferredRoles:
            aiProfile.recommendedRoles || []

    };

}

module.exports = {
    buildProfile
};