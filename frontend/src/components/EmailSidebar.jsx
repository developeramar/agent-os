import { Link } from "react-router-dom";

function EmailSidebar() {

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        display: "block",
        padding: "10px 0"
    };

    return (

        <div
            style={{
                width: "250px",
                background: "#111827",
                color: "white",
                padding: "20px",
                borderRadius: "15px",
                height: "fit-content"
            }}
        >

            <h3>📧 Email Agent</h3>

            <hr />

            <Link
                to="/emails"
                style={linkStyle}
            >
                ✍️ Email Generator
            </Link>

            <Link
                to="/inbox"
                style={linkStyle}
            >
                📬 Inbox Intelligence
            </Link>

            <Link
                to="/emails"
                style={linkStyle}
            >
                📝 Drafts
            </Link>

            <Link
                to="/emails"
                style={linkStyle}
            >
                📤 Sent Emails
            </Link>

        </div>

    );

}

export default EmailSidebar;