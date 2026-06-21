import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {

    const cardStyle = {
        background: "#1e293b",
        borderRadius: "20px",
        padding: "30px",
        color: "white",
        marginBottom: "25px",
        border:
            "1px solid rgba(255,255,255,0.08)"
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
                        maxWidth: "1100px",
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
                                fontSize:
                                    "clamp(40px,6vw,70px)"
                            }}
                        >
                            ⚡ About AgentOS
                        </h1>

                        <p
                            style={{
                                color: "#94a3b8",
                                maxWidth: "750px",
                                margin: "20px auto",
                                lineHeight: "1.8",
                                fontSize: "18px"
                            }}
                        >
                            We believe people should spend
                            less time managing emails and
                            more time doing meaningful work.
                        </p>

                    </div>

                    {/* STORY */}

                    <div style={cardStyle}>

                        <h2>
                            🚀 Why AgentOS Exists
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: "1.9",
                                marginTop: "15px"
                            }}
                        >
                            Every day people receive
                            dozens of emails:
                            interviews,
                            job offers,
                            finance alerts,
                            delivery updates,
                            OTPs and reminders.

                            <br /><br />

                            Most important emails get
                            buried under promotional
                            messages and notifications.

                            <br /><br />

                            AgentOS was built to solve
                            this problem.
                        </p>

                    </div>

                    {/* PROBLEM */}

                    <div style={cardStyle}>

                        <h2>
                            😫 The Problem
                        </h2>

                        <div
                            style={{
                                lineHeight: "2",
                                color: "#fca5a5",
                                marginTop: "20px"
                            }}
                        >

                            ❌ Reading 50+ emails daily

                            <br />

                            ❌ Missing interviews

                            <br />

                            ❌ Forgetting follow-ups

                            <br />

                            ❌ Losing important updates

                            <br />

                            ❌ Wasting hours every week

                        </div>

                    </div>

                    {/* SOLUTION */}

                    <div style={cardStyle}>

                        <h2>
                            🤖 How AgentOS Helps
                        </h2>

                        <div
                            style={{
                                lineHeight: "2",
                                color: "#86efac",
                                marginTop: "20px"
                            }}
                        >

                            ✅ Reads emails automatically

                            <br />

                            ✅ Generates summaries

                            <br />

                            ✅ Detects interviews

                            <br />

                            ✅ Detects job offers

                            <br />

                            ✅ Creates reminders

                            <br />

                            ✅ Suggests actions

                            <br />

                            ✅ Saves hours every week

                        </div>

                    </div>

                    {/* VISION */}

                    <div style={cardStyle}>

                        <h2>
                            🌍 Our Vision
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: "1.9",
                                marginTop: "15px"
                            }}
                        >
                            Today AgentOS helps users
                            manage emails and reminders.

                            <br /><br />

                            Tomorrow AgentOS aims to become
                            a complete AI Executive Assistant
                            that helps people organize work,
                            communication and daily life.

                            <br /><br />

                            The goal is simple:

                            <br /><br />

                            <strong
                                style={{
                                    color: "white"
                                }}
                            >
                                Let AI handle the busy work,
                                so people can focus on what
                                truly matters.
                            </strong>

                        </p>

                    </div>

                    {/* FINAL */}

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "50px"
                        }}
                    >

                        <h2
                            style={{
                                color: "white"
                            }}
                        >
                            ⚡ AgentOS
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                marginTop: "10px"
                            }}
                        >
                            Your AI Executive Assistant
                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );

}

export default About;