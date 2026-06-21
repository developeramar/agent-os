const express =
    require("express");

const router =
    express.Router();

const {

    createReminder,

    getAllReminders,

    updateReminder,

    deleteReminder

} = require(
    "../controllers/reminderController"
);

router.post(
    "/reminders",
    createReminder
);

router.get(
    "/reminders",
    getAllReminders
);

router.put(
    "/reminders/:id",
    updateReminder
);

router.delete(
    "/reminders/:id",
    deleteReminder
);

module.exports =
    router;