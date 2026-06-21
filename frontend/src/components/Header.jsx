import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {


const [menuOpen, setMenuOpen] =
    useState(false);

const token =
    localStorage.getItem("token");

const user =
    JSON.parse(
        localStorage.getItem("user")
    );

const navLink = {
    color: "#cbd5e1",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px"
};

function logout() {

    localStorage.removeItem(
        "token"
    );

    localStorage.removeItem(
        "user"
    );

    window.location.href =
        "/";

}

return (

    <header
        style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backdropFilter: "blur(20px)",
            background:
                "rgba(15,23,42,.92)",
            borderBottom:
                "1px solid rgba(255,255,255,.08)"
        }}
    >

        <div
            style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <Link
                to="/"
                style={{
                    textDecoration: "none"
                }}
            >

                <div>

                    <h2
                        style={{
                            color: "white",
                            margin: 0
                        }}
                    >
                        ⚡ AgentOS
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#94a3b8",
                            fontSize: "12px"
                        }}
                    >
                        AI Executive Assistant
                    </p>

                </div>

            </Link>

            <nav
                style={{
                    display: "flex",
                    gap: "25px"
                }}
            >

                <Link
                    to="/"
                    style={navLink}
                >
                    Home
                </Link>

                <Link
                    to="/inbox"
                    style={navLink}
                >
                    Inbox Intelligence
                </Link>

                <Link
                    to="/emails"
                    style={navLink}
                >
                    Email Agent
                </Link>

                <Link
                    to="/reminders"
                    style={navLink}
                >
                    Reminder Agent
                </Link>

                <Link
                    to="/pricing"
                    style={navLink}
                >
                    Pricing
                </Link>

            </nav>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center"
                }}
            >

                {

                    !token ? (

                        <>

                            <Link
                                to="/login"
                                style={{
                                    background:
                                        "transparent",
                                    border:
                                        "1px solid #334155",
                                    color:
                                        "white",
                                    padding:
                                        "10px 18px",
                                    borderRadius:
                                        "10px",
                                    textDecoration:
                                        "none"
                                }}
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                style={{
                                    background:
                                        "#2563eb",
                                    color:
                                        "white",
                                    padding:
                                        "10px 18px",
                                    borderRadius:
                                        "10px",
                                    textDecoration:
                                        "none"
                                }}
                            >
                                Signup
                            </Link>

                        </>

                    ) : (

                        <>

                            <span
                                style={{
                                    color:
                                        "white",
                                    fontSize:
                                        "14px"
                                }}
                            >
                                👋 {user?.name}
                            </span>

                            <Link
                                to="/profile"
                                style={{
                                    background:
                                        "#1e293b",
                                    color:
                                        "white",
                                    padding:
                                        "10px 18px",
                                    borderRadius:
                                        "10px",
                                    textDecoration:
                                        "none"
                                }}
                            >
                                Profile
                            </Link>

                            <button
                                onClick={
                                    logout
                                }
                                style={{
                                    background:
                                        "#ef4444",
                                    color:
                                        "white",
                                    border:
                                        "none",
                                    padding:
                                        "10px 18px",
                                    borderRadius:
                                        "10px",
                                    cursor:
                                        "pointer"
                                }}
                            >
                                Logout
                            </button>

                        </>

                    )

                }

            </div>

        </div>

    </header>

);

}

export default Header;
