
const {
    openLoginPage,
    detectLoginForm
} = require("../agent/sessionAgent");



exports.openSession = async (
    req,
    res
) => {

    try {

        const result =
            await openLoginPage();

        res.status(200).json({

            success: true,

            result

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




exports.detectLogin = async (
    req,
    res
) => {

    try {

        const result =
            await detectLoginForm();

        res.status(200).json({
            success: true,
            result
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