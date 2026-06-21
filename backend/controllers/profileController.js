const Profile =
    require("../models/Profile");

const User =
    require("../models/User");

exports.getProfile =
async (req,res)=>{

    const user =
        await User.findById(
            req.user.userId
        );

    if(
        !user.resumeUploaded
    ){

        return res.json({

            success:true,

            onboardingRequired:true,

            step:
                "resume"

        });

    }

    if(
        !user.gmailConnected
    ){

        return res.json({

            success:true,

            onboardingRequired:true,

            step:
                "gmail"

        });

    }

    const profile =
        await Profile.findOne({

            userId:
                req.user.userId

        });

    if(!profile){

        return res.json({

            success:true,

            onboardingRequired:true,

            step:
                "profile"

        });

    }

    return res.json({

        success:true,

        onboardingRequired:false,

        profile

    });

};