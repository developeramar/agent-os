const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function matchResumeWithJob(
    resumeAnalysis,
    jobDetails
) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
You are an expert recruiter.

Resume:

${resumeAnalysis}

Job:

${jobDetails}

Return:

1. Match Score (0-100)
2. Matching Skills
3. Missing Skills
4. Why this job fits
5. Should user apply? (Yes/No)

Return clean text.
`;

    const result =
        await model.generateContent(prompt);

    return result.response.text();
}

module.exports = {
    matchResumeWithJob
};