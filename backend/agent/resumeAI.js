const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function analyzeResume(resumeText) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
Analyze this resume.

Return ONLY valid JSON.

Format:

{
  "name": "",
  "email": "",
  "phone": "",
  "location": "",
  "professionalSummary": "",
  "skills": [],
  "experience": "",
  "education": "",
  "recommendedRoles": []
}

Resume:

${resumeText}

Rules:
- Extract full name.
- Extract email.
- Extract phone number.
- Extract city/location if available.
- Return ONLY JSON.
- No markdown.
- No explanation.
- No extra text.
`;

    const result =
        await model.generateContent(prompt);

    return result.response.text();
}

module.exports = {
    analyzeResume
};