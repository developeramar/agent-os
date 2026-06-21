import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

    const [userData, setUserData] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const token =
                    localStorage.getItem(
                        "token"
                    );

                if (!token) {

                    setLoading(false);
                    return;

                }

                const res =
                    await fetch(
                        "http://localhost:5000/api/user/my-account",
                        {
                            headers: {
                                authorization:
                                    token
                            }
                        }
                    );

                const data =
                    await res.json();

                if (
                    data.success
                ) {

                    setUserData(
                        data.user
                    );

                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchUser();

    }, []);

    const heroButton = {

        display: "inline-block",

        marginTop: "25px",

        background:
            "linear-gradient(135deg,#2563eb,#3b82f6)",

        color: "white",

        textDecoration:
            "none",

        padding:
            "14px 28px",

        borderRadius:
            "14px",

        fontWeight:
            "600",

        transition:
            ".3s"

    };

    if (loading) {

        return (

            <>

                <Header />

                <div
                    style={{
                        minHeight:
                            "100vh",
                        background:
                            "#0f172a",
                        display:
                            "flex",
                        justifyContent:
                            "center",
                        alignItems:
                            "center",
                        color:
                            "white"
                    }}
                >

                    <h2>
                        Loading <b>AgentOS</b>...
                    </h2>

                </div>

                <Footer />

            </>

        );

    }

    return (

        <>

            <Header />

            <div
                style={{
                    background:
                        "#0f172a",
                    minHeight:
                        "100vh",
                    padding:
                        "30px 20px"
                }}
            >

                <div
                    style={{
                        maxWidth:
                            "1300px",
                        margin:
                            "0 auto"
                    }}
                >

                    {/* HERO */}

                    <div
    style={{
        textAlign: "center",
        marginBottom: "50px"
    }}
>

<div
    style={{
        background:
            "linear-gradient(135deg,#1e293b,#111827)",
        border:
            "1px solid rgba(255,255,255,.08)",
        borderRadius:
            "32px",
        padding:
            "70px 40px",
        boxShadow:
            "0 20px 80px rgba(37,99,235,.15)"
    }}
>

    <h1
        style={{
            fontSize:
                "clamp(48px,7vw,82px)",
            color:
                "white",
            lineHeight:
                "1.1",
            marginBottom:
                "20px",
            fontWeight:
                "800"
        }}
    >
        Stop Reading
        <br />
        Every Email.
    </h1>

    <h2
        style={{
            color:
                "#60a5fa",
            fontSize:
                "clamp(22px,3vw,34px)",
            marginBottom:
                "25px"
        }}
    >
        Let <b>AgentOS</b> Handle It.
    </h2>

    <p
        style={{
            color:
                "#cbd5e1",
            fontSize:
                "18px",
            maxWidth:
                "850px",
            margin:
                "0 auto",
            lineHeight:
                "1.9"
        }}
    >
        AI Email Intelligence for professionals,
        job seekers and founders. <b>AgentOS</b> reads
        emails, detects interviews, creates
        reminders and generates replies
        automatically.
    </p>

    <div
        style={{
            display:
                "grid",
            gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
            gap:
                "15px",
            marginTop:
                "40px"
        }}
    >

        <div style={heroMiniCard}>
            <h3>⚡</h3>
            <p>Save Hours Weekly</p>
        </div>

        <div style={heroMiniCard}>
            <h3>📧</h3>
            <p>AI Email Intelligence</p>
        </div>

        <div style={heroMiniCard}>
            <h3>🎯</h3>
            <p>Interview Detection</p>
        </div>

        <div style={heroMiniCard}>
            <h3>📅</h3>
            <p>Auto Reminders</p>
        </div>

    </div>

    {

        userData?.gmailConnected ? (

            <Link
                to="/inbox"
                style={heroButton}
            >
                🚀 Open Inbox Intelligence
            </Link>

        ) : (

            <Link
                to="/profile"
                style={heroButton}
            >
                📧 Connect Gmail
            </Link>

        )

    }

</div>


</div>


                    {

                        userData && (

                            <div
                                style={{
                                    background:
                                        "#1e293b",
                                    borderRadius:
                                        "24px",
                                    padding:
                                        "25px",
                                    marginBottom:
                                        "30px",
                                    border:
                                        "1px solid rgba(255,255,255,.08)"
                                }}
                            >

                                <h2
                                    style={{
                                        color:
                                            "white",
                                        marginBottom:
                                            "10px"
                                    }}
                                >
                                    Welcome Back,
                                    {" "}
                                    {userData.name}
                                    👋
                                </h2>

                                <p
                                    style={{
                                        color:
                                            "#94a3b8"
                                    }}
                                >
                                    Your AI Executive
                                    Assistant is ready.
                                </p>

                            </div>

                        )

                    }

                    <div
                        style={{
                            display:
                                "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit,minmax(300px,1fr))",
                            gap:
                                "20px",
                            marginBottom:
                                "30px"
                        }}
                    >

                        <div style={cardStyle}>

                            <h3>
                                🚀 Your Plan
                            </h3>

                            <p>
                                Current Plan:
                                {" "}
                                <b
                                    style={{
                                        color:
                                            "#22c55e"
                                    }}
                                >
                                    {
                                        userData?.plan ||
                                        "free"
                                    }
                                </b>
                            </p>

                            <p>
                                Gmail:
                                {" "}
                                {
                                    userData?.gmailConnected
                                        ? "✅ Connected"
                                        : "❌ Not Connected"
                                }
                            </p>

                            <p>
                                Usage:
                                {" "}
                                {
                                    userData?.emailUsage || 0
                                }
                                /
                                {
                                    userData?.emailLimit || 20
                                }
                            </p>

                        </div>

                        <div style={cardStyle}>

                            <h3>
                                📈 Productivity
                            </h3>

                            <p>
                                Save hours every week
                                by letting AI process
                                emails for you.
                            </p>

                            <p>
                                Focus on important
                                work instead of inbox
                                management.
                            </p>

                        </div>

                        <div style={cardStyle}>

                            <h3>
                                📬 Inbox Status
                            </h3>

                            <p>
                                Gmail connected:
                                {" "}
                                {
                                    userData?.gmailConnected
                                        ? "Yes"
                                        : "No"
                                }
                            </p>

                            <p>
                                AI Ready:
                                {" "}
                                {
                                    userData?.gmailConnected
                                        ? "✅"
                                        : "❌"
                                }
                            </p>

                        </div>

                    </div>

                                        {/* WHY <b><b><b>AgentOS</b></b></b> */}

                    <div
                        style={{
                            background:
                                "#1e293b",
                            borderRadius:
                                "24px",
                            padding:
                                "35px",
                            marginBottom:
                                "30px",
                            border:
                                "1px solid rgba(255,255,255,.08)"
                        }}
                    >

                        <h2
                            style={{
                                color:
                                    "white",
                                marginBottom:
                                    "20px"
                            }}
                        >
                            Why Professionals Use <b>AgentOS</b>
                        </h2>

                        <p
                            style={{
                                color:
                                    "#cbd5e1",
                                lineHeight:
                                    "2"
                            }}
                        >
                            Most professionals receive
                            dozens of emails every day.
                            Important recruiter messages,
                            interview invitations,
                            finance alerts and critical
                            updates often get buried
                            under promotional emails.
                        </p>

                        <p
                            style={{
                                color:
                                    "#cbd5e1",
                                lineHeight:
                                    "2",
                                marginTop:
                                    "15px"
                            }}
                        >
                            <b>AgentOS</b> automatically scans
                            your inbox, categorizes
                            emails, identifies priority
                            messages, generates AI
                            summaries, recommends actions
                            and creates reminders so
                            you can focus on meaningful
                            work instead of inbox
                            management.
                        </p>

                    </div>

                    {/* FEATURES */}

                    <div
                        style={{
                            display:
                                "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit,minmax(280px,1fr))",
                            gap:
                                "20px",
                            marginBottom:
                                "30px"
                        }}
                    >

                        <div style={cardStyle}>
                            <h2>📬</h2>
                            <h3>
                                Inbox Intelligence
                            </h3>
                            <p>
                                Automatically reads,
                                categorizes and
                                summarizes emails.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h2>📧</h2>
                            <h3>
                                Email Agent
                            </h3>
                            <p>
                                Generate professional
                                AI-powered replies in
                                seconds.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h2>📅</h2>
                            <h3>
                                Reminder Agent
                            </h3>
                            <p>
                                Create reminders from
                                interviews, meetings
                                and important emails.
                            </p>
                        </div>

                    </div>

                    {/* USE CASES */}

                    <div
                        style={{
                            background:
                                "#1e293b",
                            borderRadius:
                                "24px",
                            padding:
                                "35px",
                            marginBottom:
                                "30px",
                            border:
                                "1px solid rgba(255,255,255,.08)"
                        }}
                    >

                        <h2
                            style={{
                                color:
                                    "white",
                                marginBottom:
                                    "25px"
                            }}
                        >
                            Built For Everyone
                        </h2>

                        <div
                            style={{
                                display:
                                    "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(250px,1fr))",
                                gap:
                                    "20px"
                            }}
                        >

                            <div>

                                <h3
                                    style={{
                                        color:
                                            "#60a5fa"
                                    }}
                                >
                                    🎯 Job Seekers
                                </h3>

                                <p
                                    style={{
                                        color:
                                            "#cbd5e1"
                                    }}
                                >
                                    Never miss interview
                                    invitations,
                                    recruiter emails
                                    or offer letters.
                                </p>

                            </div>

                            <div>

                                <h3
                                    style={{
                                        color:
                                            "#60a5fa"
                                    }}
                                >
                                    💼 Professionals
                                </h3>

                                <p
                                    style={{
                                        color:
                                            "#cbd5e1"
                                    }}
                                >
                                    Stay productive
                                    without spending
                                    hours managing
                                    your inbox.
                                </p>

                            </div>

                            <div>

                                <h3
                                    style={{
                                        color:
                                            "#60a5fa"
                                    }}
                                >
                                    🚀 Founders
                                </h3>

                                <p
                                    style={{
                                        color:
                                            "#cbd5e1"
                                    }}
                                >
                                    Track investor,
                                    customer and
                                    business emails
                                    effortlessly.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* FINAL CTA */}

                    <div
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            borderRadius:
                                "28px",
                            padding:
                                "50px",
                            textAlign:
                                "center",
                            color:
                                "white"
                        }}
                    >

                        <h2>
                            Ready To Let AI Handle
                            Your Inbox?
                        </h2>

                        <p
                            style={{
                                maxWidth:
                                    "800px",
                                margin:
                                    "20px auto",
                                lineHeight:
                                    "1.8"
                            }}
                        >
                            Join professionals,
                            job seekers and founders
                            who use <b>AgentOS</b> to save
                            time, stay organized and
                            never miss important
                            opportunities.
                        </p>

                        {

                            userData?.gmailConnected ? (

                                <Link
                                    to="/inbox"
                                    style={heroButton}
                                >
                                    Open Inbox Intelligence
                                </Link>

                            ) : (

                                <Link
                                    to="/profile"
                                    style={heroButton}
                                >
                                    Connect Gmail Now
                                </Link>

                            )

                        }

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

const heroMiniCard = {

background:
    "rgba(255,255,255,.05)",

border:
    "1px solid rgba(255,255,255,.08)",

borderRadius:
    "20px",

padding:
    "20px",

color:
    "white",

transition:
    ".3s"


};



const badge = {

    background:
        "#2563eb",

    color:
        "white",

    padding:
        "10px 16px",

    borderRadius:
        "999px",

    fontSize:
        "14px",

    fontWeight:
        "600"

};

const cardStyle = {

    background:
        "#1e293b",

    border:
        "1px solid rgba(255,255,255,.08)",

    borderRadius:
        "20px",

    padding:
        "25px",

    color:
        "white"

};

export default Home;