const {

    getReminders,

    createReminder,

    updateReminder,

    deleteReminder

} = require(
    "../agent/reminderAgent"
);

exports.createReminder =
async (req, res) => {

    try {

        const reminder =
            createReminder(
                req.body
            );

        res.status(201).json({

            success: true,

            reminder

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

exports.getAllReminders =
async (req, res) => {

    try {

        const reminders =
            getReminders();

        res.status(200).json({

            success: true,

            reminders

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

exports.updateReminder =
async (req, res) => {

    try {

        const reminder =
            updateReminder(
                req.params.id,
                req.body
            );

        res.status(200).json({

            success: true,

            reminder

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

exports.deleteReminder =
async (req, res) => {

    try {

        deleteReminder(
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