const { GoogleGenerativeAI } =
    require("@google/generative-ai");

const genAI =
    new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY
    );

async function classifyEmail(
    email
) {

    const model =
        genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

    const prompt = `

You are an Email Intelligence Agent.

Analyze this email.

Return ONLY valid JSON.

Format:

{
  "category": "",
  "priority": "",
  "summary": "",
  "actions": [],
  "intent": "",
  "cardType": "",
  "recommendedAction": "",
  "requiresReply": false,
  "interviewDetected": false,
  "otpDetected": false,
  "offerDetected": false,
  "reminderSuggested": false
}

Allowed Categories:

Interview
Job
OTP
Recruiter
General
Government
Finance
Offer
Travel
Personal
Promotion
Spam
Action Required
Document

Allowed Priorities:

Critical
High
Medium
Low

Allowed Recommended Actions:

Create Reminder
Generate Reply
Archive
Copy OTP
Review Offer
View Report
Track Order
Open Link
Mark Read

Email:


Subject:
${email.subject}

From:
${email.from}

Snippet:
${email.snippet}

Full Email Body:
${email.body}

Rules:

- Return only JSON.
- Summary maximum 2 lines.
- Actions maximum 3.
- Detect intent.
- Set requiresReply=true if sender expects response.
- Set interviewDetected=true if interview, assessment, recruiter call, HR discussion or hiring process is present.
- Set otpDetected=true if OTP or verification code is present.
- Set offerDetected=true if offer letter, selected, hired, onboarding or congratulations mail is present.
- Set reminderSuggested=true if reminder is useful.

Recommended Action Rules:

- Interview -> Create Reminder
- Recruiter Question -> Generate Reply
- OTP -> Copy OTP
- Offer Letter -> Review Offer
- Promotion -> Archive
- Finance -> View Report
- Delivery -> Track Order
- General Information -> Mark Read

Choose ONLY ONE recommendedAction.

No markdown.
No explanation.

`;

    const result =
        await model.generateContent(
            prompt
        );

    return JSON.parse(
        result.response.text()
    );

}

module.exports = {
    classifyEmail
};