import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";

function Profile() {


const navigate =
    useNavigate();

const [account, setAccount] =
    useState(null);

const [loading, setLoading] =
    useState(true);

useEffect(() => {

    fetchAccount();

}, []);

async function fetchAccount() {

    try {

        const response =
            await api.get(
                "/user/my-account"
            );

        setAccount(
            response.data.user
        );

    } catch (error) {

        console.error(error);

    } finally {

        setLoading(false);

    }

}

function connectGmail() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        );

    window.location.href =
        `http://localhost:5000/auth/google?userId=${user.id}`;

}

if (loading) {

    return (

        <div
            style={{
                background:
                    "#0f172a",
                minHeight:
                    "100vh",
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

            <h2>
                Loading Profile...
            </h2>

        </div>

    );

}

return (

    <>

        <Header />

        <div
            style={{
                minHeight:
                    "100vh",
                background:
                    "#0f172a",
                padding:
                    "30px",
                color:
                    "white"
            }}
        >

            <div
                style={{
                    maxWidth:
                        "1200px",
                    margin:
                        "0 auto"
                }}
            >

                <div
                    style={{
                        background:
                            "linear-gradient(135deg,#1e293b,#111827)",
                        padding:
                            "35px",
                        borderRadius:
                            "28px",
                        marginBottom:
                            "25px"
                    }}
                >

                    <div
                        style={{
                            display:
                                "flex",
                            gap:
                                "20px",
                            alignItems:
                                "center",
                            flexWrap:
                                "wrap"
                        }}
                    >

                        <div
                            style={{
                                width:
                                    "90px",
                                height:
                                    "90px",
                                borderRadius:
                                    "50%",
                                background:
                                    "#2563eb",
                                display:
                                    "flex",
                                justifyContent:
                                    "center",
                                alignItems:
                                    "center",
                                fontSize:
                                    "32px",
                                fontWeight:
                                    "bold"
                            }}
                        >
                            {
                                account?.name?.charAt(0)
                            }
                        </div>

                        <div>

                            <h1>
                                {
                                    account?.name
                                }
                            </h1>

                            <p>
                                {
                                    account?.email
                                }
                            </p>

                            <p>
                                Joined :
                                {" "}
                                {
                                    new Date(
                                        account?.createdAt
                                    ).toLocaleDateString()
                                }
                            </p>

                        </div>

                    </div>

                </div>

                <div
                    style={{
                        display:
                            "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(300px,1fr))",
                        gap:
                            "20px"
                    }}
                >

                    <div style={card}>

                        <h2>
                            🚀 Account
                        </h2>

                        <p>
                            Plan :
                            {" "}
                            {
                                account?.plan
                            }
                        </p>

                        <p>
                            Email Usage :
                            {" "}
                            {
                                account?.emailUsage
                            }
                            {" / "}
                            {
                                account?.emailLimit
                            }
                        </p>

                        <div style={progress}>

                            <div
                                style={{
                                    ...fill,
                                    width:
                                        `${(
                                            (
                                                account?.emailUsage || 0
                                            ) /
                                            (
                                                account?.emailLimit || 20
                                            )
                                        ) * 100}%`
                                }}
                            />

                        </div>

                        <p
                            style={{
                                marginTop:
                                    "10px",
                                color:
                                    "#94a3b8"
                            }}
                        >

                            Remaining Credits :

                            {" "}

                            {
                                (
                                    account?.emailLimit || 20
                                ) -
                                (
                                    account?.emailUsage || 0
                                )
                            }

                        </p>

                        <button
                            style={button}
                            onClick={() =>
                                navigate(
                                    "/pricing"
                                )
                            }
                        >
                            Upgrade Plan
                        </button>

                    </div>

                    <div style={card}>

                        <h2>
                            📧 Gmail Status
                        </h2>

                        <p>

                            Status :

                            {" "}

                            {
                                account?.gmailConnected
                                    ? "✅ Connected"
                                    : "❌ Not Connected"
                            }

                        </p>

                        {

                            !account?.gmailConnected && (

                                <button
                                    style={button}
                                    onClick={
                                        connectGmail
                                    }
                                >
                                    Connect Gmail
                                </button>

                            )

                        }

                    </div>

                    <div style={card}>

                        <h2>
                            📊 Analytics
                        </h2>

                        <p>
                            Email Intelligence Runs :
                            {" "}
                            {
                                account?.emailUsage
                            }
                        </p>

                        <p>
                            Remaining Credits :
                            {" "}
                            {
                                (
                                    account?.emailLimit || 20
                                ) -
                                (
                                    account?.emailUsage || 0
                                )
                            }
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <Footer />

    </>

);

}

const card = {


background:
    "#1e293b",

padding:
    "25px",

borderRadius:
    "24px",

border:
    "1px solid rgba(255,255,255,.08)"


};

const progress = {


height:
    "12px",

background:
    "#334155",

borderRadius:
    "20px",

overflow:
    "hidden",

marginTop:
    "10px"


};

const fill = {


height:
    "100%",

background:
    "#22c55e"


};

const button = {


marginTop:
    "15px",

background:
    "#2563eb",

color:
    "white",

border:
    "none",

padding:
    "12px 18px",

borderRadius:
    "12px",

cursor:
    "pointer"


};

export default Profile;
