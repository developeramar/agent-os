import { useNavigate } from "react-router-dom";

function Onboarding() {

    const navigate =
        useNavigate();

    const user =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        );

    return (

        <div
            style={{
                minHeight:
                    "100vh",
                background:
                    "#0f172a",
                color:
                    "white",
                display:
                    "flex",
                justifyContent:
                    "center",
                alignItems:
                    "center"
            }}
        >

            <div
                style={{
                    width: "700px",
                    background:
                        "#1e293b",
                    padding:
                        "40px",
                    borderRadius:
                        "20px"
                }}
            >

                <h1>
                    🚀 Welcome To AgentOS
                </h1>

                <p>
                    Hello {user?.name}
                </p>

                <hr />

                <h3>
                    Setup Your Account
                </h3>

                <div
                    style={{
                        marginTop:
                            "30px"
                    }}
                >

                    <div
                        style={{
                            marginBottom:
                                "20px"
                        }}
                    >

                        <h3>
                            1️⃣ Connect Gmail
                        </h3>

                        <button
                            onClick={() =>
                                window.location.href =
                                "http://localhost:5000/auth/google"
                            }
                            style={{
                                padding:
                                    "12px 20px",
                                border:
                                    "none",
                                borderRadius:
                                    "10px",
                                cursor:
                                    "pointer"
                            }}
                        >
                            Connect Gmail
                        </button>

                    </div>

                    <div>

                        <h3>
                            2️⃣ Upload Resume
                        </h3>

                        <button
                            onClick={() =>
                                navigate(
                                    "/upload"
                                )
                            }
                            style={{
                                padding:
                                    "12px 20px",
                                border:
                                    "none",
                                borderRadius:
                                    "10px",
                                cursor:
                                    "pointer"
                            }}
                        >
                            Upload Resume
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Onboarding;