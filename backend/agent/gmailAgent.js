const { google } =
require("googleapis");

const User =
require("../models/User");

const oauth2Client =
require("../config/googleOAuth");

async function sendEmail(


userId,

to,

subject,

body


) {


const user =
    await User.findById(
        userId
    );

if (!user) {

    throw new Error(
        "User not found"
    );

}

if (
    !user.googleRefreshToken
) {

    throw new Error(
        "Gmail not connected"
    );

}

oauth2Client.setCredentials({

    refresh_token:
        user.googleRefreshToken

});

const gmail =
    google.gmail({

        version: "v1",

        auth:
            oauth2Client

    });

const message = [

    `To: ${to}`,

    `Subject: ${subject}`,

    "",

    body

].join("\n");

const encodedMessage =
    Buffer.from(message)

        .toString("base64")

        .replace(/\+/g, "-")

        .replace(/\//g, "_")

        .replace(/=+$/, "");

const result =
    await gmail.users.messages.send({

        userId: "me",

        requestBody: {

            raw:
                encodedMessage

        }

    });

return result.data;


}

module.exports = {


sendEmail


};
