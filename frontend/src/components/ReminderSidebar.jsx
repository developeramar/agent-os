import { Link } from "react-router-dom";

function ReminderSidebar() {

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

            <h3>📅 Reminder Agent</h3>

            <hr />

            <Link
                to="/reminders"
                style={linkStyle}
            >
                ➕ Create Reminder
            </Link>

            <Link
                to="/reminders"
                style={linkStyle}
            >
                ⏰ Upcoming
            </Link>

            <Link
                to="/reminders"
                style={linkStyle}
            >
                ✅ Completed
            </Link>

        </div>

    );

}

export default ReminderSidebar;