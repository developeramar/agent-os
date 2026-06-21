function RecommendationCard({
    title,
    score,
    platform,
    url
}) {

    return (

        <div
            style={{
                background: "#1e293b",
                color: "white",
                padding: "25px",
                borderRadius: "16px",
                marginBottom: "20px",
                border: "1px solid #334155",
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent:
                        "space-between",
                    alignItems:
                        "center",
                    marginBottom:
                        "15px",
                }}
            >

                <span
                    style={{
                        background:
                            "#2563eb",
                        padding:
                            "6px 12px",
                        borderRadius:
                            "20px",
                        fontSize:
                            "14px",
                        fontWeight:
                            "600",
                    }}
                >
                    {platform}
                </span>

                <span
                    style={{
                        background:
                            "#16a34a",
                        padding:
                            "6px 12px",
                        borderRadius:
                            "20px",
                        fontSize:
                            "14px",
                        fontWeight:
                            "600",
                    }}
                >
                    {score}% Match
                </span>

            </div>

            <h2
                style={{
                    marginBottom:
                        "15px",
                }}
            >
                {title}
            </h2>

            <button
                onClick={() =>
                    window.open(
                        url,
                        "_blank"
                    )
                }
                style={{
                    background:
                        "#3b82f6",
                    color:
                        "white",
                    border:
                        "none",
                    padding:
                        "10px 20px",
                    borderRadius:
                        "8px",
                    cursor:
                        "pointer",
                    fontWeight:
                        "600",
                }}
            >
                Apply Now
            </button>

        </div>

    );

}

export default RecommendationCard;