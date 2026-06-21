import Header from "../components/Header";
import Footer from "../components/Footer";

function Pricing() {

    const planCard = {
        flex: "1",
        minWidth: "320px",
        background: "#1e293b",
        borderRadius: "24px",
        padding: "35px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.08)"
    };

    return (

        <>
            <Header />

            <div
                style={{
                    background: "#0f172a",
                    minHeight: "100vh",
                    padding: "50px 20px"
                }}
            >

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >

                    {/* HERO */}

                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "60px"
                        }}
                    >

                        <h1
                            style={{
                                color: "white",
                                fontSize: "clamp(40px,6vw,70px)"
                            }}
                        >
                            Simple Pricing
                        </h1>

                        <p
                            style={{
                                color: "#94a3b8",
                                fontSize: "18px",
                                maxWidth: "700px",
                                margin: "20px auto",
                                lineHeight: "1.8"
                            }}
                        >
                            Spend less time reading emails.
                            Spend more time getting work done.
                        </p>

                    </div>

                    {/* PLANS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "30px",
                            flexWrap: "wrap",
                            alignItems: "stretch"
                        }}
                    >

                        {/* FREE PLAN */}

                        <div style={planCard}>

                            <h2>
                                🚀 Free
                            </h2>

                            <h1
                                style={{
                                    color: "white",
                                    margin: "20px 0"
                                }}
                            >
                                ₹0
                            </h1>

                            <p
                                style={{
                                    color: "#94a3b8"
                                }}
                            >
                                Perfect for getting started.
                            </p>

                            <hr
                                style={{
                                    margin: "25px 0",
                                    borderColor: "#334155"
                                }}
                            />

                            <div
                                style={{
                                    lineHeight: "2"
                                }}
                            >

                                ✅ Connect Gmail

                                <br />

                                ✅ Inbox Intelligence

                                <br />

                                ✅ Email Summaries

                                <br />

                                ✅ Priority Detection

                                <br />

                                ✅ 20 Emails / Day

                                <br />

                                ✅ Basic Reminder Agent

                                <br />

                                ✅ Community Support

                            </div>

                            <button
                                style={{
                                    marginTop: "30px",
                                    width: "100%",
                                    padding: "14px",
                                    borderRadius: "12px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: "600"
                                }}
                            >
                                Start Free
                            </button>

                        </div>

                        {/* PRO PLAN */}

                        <div
                            style={{
                                ...planCard,
                                background:
                                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                                boxShadow:
                                    "0 0 40px rgba(37,99,235,0.4)",
                                transform:
                                    "scale(1.03)"
                            }}
                        >

                            <div
                                style={{
                                    background:
                                        "rgba(255,255,255,0.15)",
                                    display:
                                        "inline-block",
                                    padding:
                                        "8px 14px",
                                    borderRadius:
                                        "30px",
                                    marginBottom:
                                        "15px",
                                    fontSize:
                                        "13px",
                                    fontWeight:
                                        "700"
                                }}
                            >
                                🔥 MOST POPULAR
                            </div>

                            <h2>
                                AgentOS Pro
                            </h2>

                            <h1
                                style={{
                                    margin: "20px 0"
                                }}
                            >
                                ₹199
                                <span
                                    style={{
                                        fontSize:
                                            "18px"
                                    }}
                                >
                                    /month
                                </span>
                            </h1>

                            <p>
                                Your AI Executive Assistant.
                            </p>

                            <hr
                                style={{
                                    margin: "25px 0",
                                    borderColor:
                                        "rgba(255,255,255,0.2)"
                                }}
                            />

                            <div
                                style={{
                                    lineHeight: "2"
                                }}
                            >

                                ✅ Unlimited Emails

                                <br />

                                ✅ Smart AI Summaries

                                <br />

                                ✅ Interview Detection

                                <br />

                                ✅ Job Offer Detection

                                <br />

                                ✅ OTP Detection

                                <br />

                                ✅ Finance Alerts

                                <br />

                                ✅ One Click Reminders

                                <br />

                                ✅ Recommended Actions

                                <br />

                                ✅ Smart Email Replies

                                <br />

                                ✅ Future Features Included

                                <br />

                                ✅ Priority Support

                            </div>

                            <button
                                style={{
                                    marginTop: "30px",
                                    width: "100%",
                                    padding: "14px",
                                    borderRadius: "12px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: "700",
                                    background:
                                        "white",
                                    color:
                                        "#111827"
                                }}
                            >
                                Upgrade To Pro
                            </button>

                        </div>

                    </div>

                    {/* WHY AGENTOS */}

                    <div
                        style={{
                            marginTop: "80px",
                            background: "#1e293b",
                            borderRadius: "24px",
                            padding: "40px"
                        }}
                    >

                        <h2
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginBottom: "30px"
                            }}
                        >
                            Why AgentOS?
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "30px"
                            }}
                        >

                            <div
                                style={{
                                    flex: "1",
                                    minWidth: "280px",
                                    color: "#f87171",
                                    lineHeight: "2"
                                }}
                            >

                                ❌ Read 50+ emails manually

                                <br />

                                ❌ Miss interviews

                                <br />

                                ❌ Forget follow-ups

                                <br />

                                ❌ Lose important emails

                            </div>

                            <div
                                style={{
                                    flex: "1",
                                    minWidth: "280px",
                                    color: "#4ade80",
                                    lineHeight: "2"
                                }}
                            >

                                ✅ AI Email Summaries

                                <br />

                                ✅ Interview Alerts

                                <br />

                                ✅ Smart Reminders

                                <br />

                                ✅ Recommended Actions

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );

}

export default Pricing;