const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function analyzeJob(jobText) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
Analyze this job.

Return:

1. Job Summary
2. Required Skills
3. Experience Required
4. Salary
5. Is this good for a fresher?

Job:

${jobText}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
}

console.log(
    process.env.GEMINI_API_KEY.substring(0, 15)
);

module.exports = {
    analyzeJob
};