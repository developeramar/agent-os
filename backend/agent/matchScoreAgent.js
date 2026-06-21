const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function generateMatchScore(
    resumeProfile,
    jobDescription
) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
Compare this resume with this job.

Resume:

${JSON.stringify(resumeProfile)}

Job:

${jobDescription}

Return ONLY valid JSON:

{
  "score": 0,
  "matchingSkills": [],
  "missingSkills": [],
  "shouldApply": true,
  "reason": ""
}

Rules:
- Score must be 0-100
- Return only JSON
`;

    const result =
        await model.generateContent(prompt);

    return result.response.text();
}

module.exports = {
    generateMatchScore
};