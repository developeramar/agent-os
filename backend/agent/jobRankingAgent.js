const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function rankJobs(searchQuery, jobs) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
You are a career advisor.

User Search:

${searchQuery}

Jobs:

${JSON.stringify(jobs.slice(0, 15), null, 2)}

Task:

1. Select top 5 most relevant jobs.
2. Give each a score out of 100.
3. Explain why.

Return clean text.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = {
    rankJobs
};