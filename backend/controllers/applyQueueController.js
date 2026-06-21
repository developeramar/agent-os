const {
    getApplyQueue
} = require("../agent/applyQueueAgent");

exports.getApplyQueue = async (
    req,
    res
) => {

    try {

        const queue =
            getApplyQueue();

        res.status(200).json({

            success: true,

            total:
                queue.length,

            queue

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