const {

    getDrafts,

    createDraft,

    deleteDraft

} = require(
    "../agent/emailAgent"
);


const {
    generateEmailDraft
} = require(
    "../agent/emailAI"
);

exports.createDraft =
async (req, res) => {

    try {

        const draft =
            createDraft(
                req.body
            );

        res.status(201).json({

            success: true,

            draft

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

exports.getAllDrafts =
async (req, res) => {

    try {

        const drafts =
            getDrafts();

        res.status(200).json({

            success: true,

            drafts

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

exports.deleteDraft =
async (req, res) => {

    try {

        deleteDraft(
            req.params.id
        );

        res.status(200).json({

            success: true

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};



//Email Agent/Controller 

exports.generateDraft =
async (req, res) => {

    try {

        const {
            prompt
        } = req.body;

        const result =
            await generateEmailDraft(
                prompt
            );

        const draft =
            JSON.parse(
                result
            );

        res.status(200).json({

            success: true,

            draft

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};