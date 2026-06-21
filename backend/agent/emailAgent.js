const fs = require("fs");

const FILE_PATH =
    "./data/drafts.json";

function getDrafts() {

    if (
        !fs.existsSync(FILE_PATH)
    ) {

        fs.writeFileSync(
            FILE_PATH,
            "[]"
        );

    }

    return JSON.parse(
        fs.readFileSync(
            FILE_PATH,
            "utf8"
        )
    );

}

function saveDrafts(
    drafts
) {

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(
            drafts,
            null,
            2
        )
    );

}

function createDraft(
    draftData
) {

    const drafts =
        getDrafts();

    const draft = {

        id:
            Date.now(),

        to:
            draftData.to,

        subject:
            draftData.subject,

        body:
            draftData.body,

        status:
            "Draft",

        createdAt:
            new Date()
                .toISOString()

    };

    drafts.push(
        draft
    );

    saveDrafts(
        drafts
    );

    return draft;

}

function deleteDraft(
    id
) {

    const drafts =
        getDrafts();

    const filtered =
        drafts.filter(
            item =>
                item.id != id
        );

    saveDrafts(
        filtered
    );

}

module.exports = {

    getDrafts,

    createDraft,

    deleteDraft,

    saveDrafts

};