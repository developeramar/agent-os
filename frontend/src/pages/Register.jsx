import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate =
        useNavigate();

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleRegister =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);

                const res =
                    await fetch(
                        "http://localhost:5000/api/auth/register",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                password
                            })
                        }
                    );

                const data =
                    await res.json();

                if (
                    data.success
                ) {

                    alert(
                        "Registration Successful"
                    );

                    navigate("/login");

                } else {

                    alert(
                        data.message
                    );

                }

            } catch (error) {

                console.log(error);

                alert(
                    "Registration Failed"
                );

            } finally {

                setLoading(false);

            }

        };

    return (

        <div
            style={{
                background: "#0f172a",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <form
                onSubmit={
                    handleRegister
                }
                style={{
                    background: "#1e293b",
                    padding: "40px",
                    borderRadius: "20px",
                    width: "400px"
                }}
            >

                <h2
                    style={{
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    Create 
                    Account
                </h2>
                <hr/>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) =>
                        setName(
                            e.target.value
                        )
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "20px"
                    }}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "15px"
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
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "15px"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        padding: "12px",
                        background: "#22c55e",
                        color: "white",
                        border: "none",
                        borderRadius: "10px"
                    }}
                >
                    {
                        loading
                            ? "Please Wait..."
                            : "Register"
                    }
                </button>

                <p
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >
                    Already have an account?

                    <Link
                        to="/login"
                        style={{
                            color: "#60a5fa",
                            marginLeft: "5px"
                        }}
                    >
                        Login
                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Register;