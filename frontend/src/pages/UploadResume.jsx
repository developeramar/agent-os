import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";

function UploadResume() {

    const navigate =
        useNavigate();

    const [file, setFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    async function handleUpload() {

        if (!file) {

            alert(
                "Please select a resume"
            );

            return;

        }

        try {

            setLoading(true);

            const formData =
                new FormData();

            formData.append(
                "resume",
                file
            );

            await api.post(
                "/resume/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

            alert(
                "Resume Uploaded Successfully 🚀"
            );

            navigate(
                "/dashboard"
            );

        } catch (error) {

            console.error(error);

            alert(
                "Upload Failed"
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <>

            <Header />

            <div
                style={{
                    minHeight:
                        "100vh",
                    background:
                        "#0f172a",
                    padding:
                        "40px 20px"
                }}
            >

                <div
                    style={{
                        maxWidth:
                            "900px",
                        margin:
                            "0 auto",
                        color:
                            "white"
                    }}
                >

                    <div
                        style={{
                            textAlign:
                                "center",
                            marginBottom:
                                "40px"
                        }}
                    >

                        <h1
                            style={{
                                fontSize:
                                    "48px",
                                marginBottom:
                                    "15px"
                            }}
                        >
                            📄 Upload Resume
                        </h1>

                        <p
                            style={{
                                color:
                                    "#94a3b8",
                                fontSize:
                                    "18px"
                            }}
                        >
                            Let AgentOS build your
                            professional profile and
                            generate career insights.
                        </p>

                    </div>

                    <div
                        style={{
                            background:
                                "#1e293b",
                            border:
                                "2px dashed #334155",
                            borderRadius:
                                "24px",
                            padding:
                                "60px 40px",
                            textAlign:
                                "center"
                        }}
                    >

                        <div
                            style={{
                                fontSize:
                                    "80px",
                                marginBottom:
                                    "20px"
                            }}
                        >
                            📑
                        </div>

                        <h2>
                            Drag & Drop Resume
                        </h2>

                        <p
                            style={{
                                color:
                                    "#94a3b8",
                                marginBottom:
                                    "30px"
                            }}
                        >
                            PDF, DOC or DOCX
                        </p>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) =>
                                setFile(
                                    e.target.files[0]
                                )
                            }
                            style={{
                                marginBottom:
                                    "20px"
                            }}
                        />

                        {

                            file && (

                                <div
                                    style={{
                                        marginTop:
                                            "15px",
                                        color:
                                            "#22c55e"
                                    }}
                                >
                                    ✅ {file.name}
                                </div>

                            )

                        }

                        <button
                            onClick={
                                handleUpload
                            }
                            disabled={
                                loading
                            }
                            style={{
                                marginTop:
                                    "30px",
                                background:
                                    "#2563eb",
                                color:
                                    "white",
                                border:
                                    "none",
                                padding:
                                    "14px 30px",
                                borderRadius:
                                    "12px",
                                fontSize:
                                    "16px",
                                cursor:
                                    "pointer"
                            }}
                        >

                            {

                                loading

                                    ? "⏳ AI Analyzing Resume..."

                                    : "🚀 Upload Resume"

                            }

                        </button>

                    </div>

                    <div
                        style={{
                            marginTop:
                                "40px",
                            background:
                                "#1e293b",
                            padding:
                                "25px",
                            borderRadius:
                                "20px"
                        }}
                    >

                        <h3>
                            🤖 What AgentOS Will Extract
                        </h3>

                        <div
                            style={{
                                display:
                                    "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(220px,1fr))",
                                gap:
                                    "15px",
                                marginTop:
                                    "20px"
                            }}
                        >

                            <div>
                                ✅ Skills
                            </div>

                            <div>
                                ✅ Experience
                            </div>

                            <div>
                                ✅ Education
                            </div>

                            <div>
                                ✅ Preferred Roles
                            </div>

                            <div>
                                ✅ Career Insights
                            </div>

                            <div>
                                ✅ AI Recommendations
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default UploadResume;