const fs = require("fs");

const FILE_PATH =
    "./data/reminders.json";

function getReminders() {

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

function saveReminders(
    reminders
) {

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(
            reminders,
            null,
            2
        )
    );

}

function createReminder(
    reminderData
) {

    const reminders =
        getReminders();

    const reminder = {

        id:
            Date.now(),

        title:
            reminderData.title,

        description:
            reminderData.description || "",

        date:
            reminderData.date,

        time:
            reminderData.time,

        status:
            "Pending",

        createdAt:
            new Date()
                .toISOString()

    };

    reminders.push(
        reminder
    );

    saveReminders(
        reminders
    );

    return reminder;

}

function updateReminder(
    id,
    updates
) {

    const reminders =
        getReminders();

    const reminder =
        reminders.find(
            item =>
                item.id ==
                id
        );

    if (!reminder) {

        throw new Error(
            "Reminder not found"
        );

    }

    Object.assign(
        reminder,
        updates
    );

    saveReminders(
        reminders
    );

    return reminder;

}

function deleteReminder(
    id
) {

    const reminders =
        getReminders();

    const filtered =
        reminders.filter(
            item =>
                item.id != id
        );

    saveReminders(
        filtered
    );

}

module.exports = {

    getReminders,

    createReminder,

    updateReminder,

    deleteReminder,

    saveReminders

};