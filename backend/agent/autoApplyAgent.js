const {
    getApplyQueue
} = require("./applyQueueAgent");

const {
    updateStatus
} = require("./applicationStatusAgent");

async function runAutoApply() {

    const queue =
        getApplyQueue();

    const queuedJobs = [];

    for (const job of queue) {

        const updatedJob =
            updateStatus(
                job.url,
                "Queued"
            );

        queuedJobs.push(
            updatedJob
        );

    }

    return {

        totalJobs:
            queuedJobs.length,

        jobs:
            queuedJobs

    };

}

module.exports = {
    runAutoApply
};