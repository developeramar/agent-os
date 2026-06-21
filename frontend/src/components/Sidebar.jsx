import { Link } from "react-router-dom";

function Sidebar() {

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        display: "block",
        padding: "0px 0",
        fontSize: "12px",

    };

    return (

        <div
            style={{
                width: "250px",
                height: "95vh",
                background: "#111827",
                color: "white",
                padding: "20px",
                position: "fixed",
                top: "15px",
                left: "15px",
                textAlign: "left",
                overflowY: "auto",

                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",

                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35)",

                fontFamily:
                    "Poppins, sans-serif",
            }}
        >

            <h1
                style={{
                    fontSize: "28px",
                    marginBottom: "5px",
                    fontWeight: "700",
                }}
            >
                AgentOS
            </h1>

            <p
                style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    marginBottom: "1px",
                }}
            >
                Your AI Executive Assistant
            </p>

            <hr />

            <h4
                style={{
                    marginTop: "0px",
                    color: "#94a3b8",
                    marginTop: "2px"
                }}
            >
                GENERAL

            </h4>

            <Link
                to="/upload"
                style={linkStyle}

            >
                🏠 Home
            </Link>

            <Link
                to="/dashboard"
                style={linkStyle}
            >
                📊 Dashboard
            </Link>

            <h4
                style={{
                    marginTop: "10px",
                    color: "#94a3b8",
                }}
            >
                AGENTS
            </h4>

            <Link
                to="/dashboard"
                style={linkStyle}
            >
                💼 Career Assistant
            </Link>

            <Link
                to="/reminders"
                style={linkStyle}
            >
                📅 Reminder Assistant
            </Link>

            <Link
                to="/emails"
                style={linkStyle}
            >
                📧 Email Assistant
            </Link>

            <p>
                <Link
                    to="/inbox"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize:"12px"
                    }}
                >
                    📬 Inbox Intelligence
                </Link>
            </p>

            <h4
                style={{
                    marginTop: "10px",
                    color: "#94a3b8",
                }}
            >
                CAREER
            </h4>

            <Link
                to="/recommendations"
                style={linkStyle}
            >
                🎯 Recommendations
            </Link>

            <Link
                to="/applications"
                style={linkStyle}
            >
                📋 Applications
            </Link>

            <h4
                style={{
                    marginTop: "10px",
                    color: "#94a3b8",
                }}
            >
                ACCOUNT
            </h4>

            <Link
                to="/profile"
                style={linkStyle}
            >
                👤 Profile
            </Link>

        </div>

    );

}

export default Sidebar;