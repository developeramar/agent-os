import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer
            style={{
                borderTop:
                    "1px solid rgba(255,255,255,0.08)",
                marginTop: "40px",
                padding: "18px 20px",
                background: "#0f172a"
            }}
        >

            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px"
                }}
            >

                <p
                    style={{
                        color: "#64748b",
                        fontSize: "13px",
                        margin: 0
                    }}
                >
                    © 2026 AgentOS
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "18px",
                        flexWrap: "wrap"
                    }}
                >

                    <Link
                        to="/emails"
                        style={{
                            color: "#94a3b8",
                            textDecoration: "none",
                            fontSize: "13px"
                        }}
                    >
                        Email
                    </Link>

                    <Link
                        to="/dashboard"
                        style={{
                            color: "#94a3b8",
                            textDecoration: "none",
                            fontSize: "13px"
                        }}
                    >
                        Career
                    </Link>

                    <Link
                        to="/reminders"
                        style={{
                            color: "#94a3b8",
                            textDecoration: "none",
                            fontSize: "13px"
                        }}
                    >
                        Reminder
                    </Link>

                </div>

            </div>

        </footer>

    );

}

export default Footer;