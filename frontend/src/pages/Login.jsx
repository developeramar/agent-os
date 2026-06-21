import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {


const navigate =
    useNavigate();

const [email, setEmail] =
    useState("");

const [password, setPassword] =
    useState("");

const [loading, setLoading] =
    useState(false);

async function handleLogin(e) {

    e.preventDefault();

    try {

        setLoading(true);

        const res =
            await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

        const data =
            await res.json();

        if (!data.success) {

            alert(
                data.message
            );

            return;

        }

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(
                data.user
            )
        );

        alert(
            "Login Successful"
        );

        if (
            !data.user.gmailConnected
        ) {

            navigate(
                "/"
            );

        } else {

            navigate(
                "/"
            );

        }

    } catch (error) {

        console.error(
            error
        );

        alert(
            "Login Failed"
        );

    } finally {

        setLoading(false);

    }

}

return (

    <div
        style={{
            background:
                "#0f172a",
            minHeight:
                "100vh",
            display:
                "flex",
            justifyContent:
                "center",
            alignItems:
                "center",
            padding:
                "20px"
        }}
    >

        <form
            onSubmit={
                handleLogin
            }
            style={{
                background:
                    "#1e293b",
                padding:
                    "40px",
                borderRadius:
                    "24px",
                width:
                    "420px",
                border:
                    "1px solid rgba(255,255,255,.08)"
            }}
        >

            <h2
                style={{
                    color:
                        "white",
                    textAlign:
                        "center",
                    marginBottom:
                        "10px"
                }}
            >
                Welcome Back
            </h2>

            <p
                style={{
                    color:
                        "#94a3b8",
                    textAlign:
                        "center",
                    marginBottom:
                        "25px"
                }}
            >
                Login to AgentOS
            </p>

            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
                required
                style={{
                    width:
                        "100%",
                    padding:
                        "14px",
                    borderRadius:
                        "12px",
                    border:
                        "none",
                    marginBottom:
                        "15px"
                }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
                required
                style={{
                    width:
                        "100%",
                    padding:
                        "14px",
                    borderRadius:
                        "12px",
                    border:
                        "none"
                }}
            />

            <button
                type="submit"
                disabled={
                    loading
                }
                style={{
                    width:
                        "100%",
                    marginTop:
                        "20px",
                    padding:
                        "14px",
                    background:
                        "#2563eb",
                    color:
                        "white",
                    border:
                        "none",
                    borderRadius:
                        "12px",
                    cursor:
                        "pointer",
                    fontWeight:
                        "600"
                }}
            >
                {
                    loading
                        ? "Please Wait..."
                        : "Login"
                }
            </button>

            <p
                style={{
                    color:
                        "white",
                    textAlign:
                        "center",
                    marginTop:
                        "20px"
                }}
            >
                Don't have an account?

                <Link
                    to="/register"
                    style={{
                        color:
                            "#60a5fa",
                        marginLeft:
                            "5px"
                    }}
                >
                    Register
                </Link>

            </p>

        </form>

    </div>

);


}

export default Login;
