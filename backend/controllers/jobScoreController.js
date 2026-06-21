const { generateMatchScore } =
    require("../agent/matchScoreAgent");

exports.testScore = async (req, res) => {

    try {

        const sampleResume = {
            skills: [
                "Customer Service",
                "CRM Systems",
                "Communication"
            ]
        };

        const sampleJob = `
Technical Support Engineer

Skills:

Customer Service
CRM
Linux
Communication
`;

        const score =
            await generateMatchScore(
                sampleResume,
                sampleJob
            );

        const cleanScore = score
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsedScore = JSON.parse(cleanScore);

        res.status(200).json({
            success: true,
            score: parsedScore
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};