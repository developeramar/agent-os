const { GoogleGenerativeAI } =
    require("@google/generative-ai");

const genAI =
    new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY
    );

async function generateEmailDraft(
    userPrompt
) {

    const model =
        genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

    const prompt = `

You are a professional email assistant.

Generate an email draft.

Return ONLY valid JSON.

Format:

{
  "subject": "",
  "body": ""
}

User Request:

${userPrompt}

Rules:
- Return only JSON.
- No markdown.
- No explanation.
- Professional tone.
`;

    const result =
        await model.generateContent(
            prompt
        );

    return result.response.text();

}

module.exports = {
    generateEmailDraft
};