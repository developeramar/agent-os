const { google } = require("googleapis");
const User = require("../models/User");
const oauth2Client = require("../config/googleOAuth");

async function getEmails(userId) {

    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.googleRefreshToken) {
        throw new Error("Gmail not connected");
    }

    oauth2Client.setCredentials({
        refresh_token: user.googleRefreshToken
    });

    const gmail = google.gmail({
        version: "v1",
        auth: oauth2Client
    });

    // Sirf Inbox ke unread conversations
    const response = await gmail.users.threads.list({
        userId: "me",
        q: "in:inbox is:unread",
        maxResults: 10
    });

    if (!response.data.threads) {
        return [];
    }

    const emailDetails = await Promise.all(

        response.data.threads.map(async (thread) => {

            const threadData = await gmail.users.threads.get({
                userId: "me",
                id: thread.id
            });

            // Conversation ka latest message
            const email =
                threadData.data.messages[
                    threadData.data.messages.length - 1
                ];

            const headers =
                email.payload.headers || [];

            const subject =
                headers.find(h => h.name === "Subject")?.value || "";

            const from =
                headers.find(h => h.name === "From")?.value || "";

            const date =
                headers.find(h => h.name === "Date")?.value || "";

            let body = "";

            if (email.payload.parts) {

                const textPart =
                    email.payload.parts.find(
                        part => part.mimeType === "text/plain"
                    );

                if (textPart?.body?.data) {

                    body = Buffer.from(
                        textPart.body.data,
                        "base64"
                    ).toString("utf8");

                }

            } else if (email.payload.body?.data) {

                body = Buffer.from(
                    email.payload.body.data,
                    "base64"
                ).toString("utf8");

            }

            return {

                id: thread.id,

                from,

                subject,

                date,

                snippet:
                    email.snippet || "",

                body,

                receivedTime:
                    Number(email.internalDate),

                unread:
                    email.labelIds.includes("UNREAD")

            };

        })

    );

    emailDetails.sort(
        (a, b) => b.receivedTime - a.receivedTime
    );

    return emailDetails;

}

module.exports = {
    getEmails
};