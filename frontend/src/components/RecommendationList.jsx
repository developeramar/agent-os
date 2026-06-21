import { useEffect, useState } from "react";
import api from "../services/api";
import RecommendationCard from "./RecommendationCard";

function RecommendationList() {

    const [jobs, setJobs] =
        useState([]);

    useEffect(() => {

        fetchRecommendations();

    }, []);

    async function fetchRecommendations() {

        try {

            const response =
                await api.get(
                    "/user/recommendations"
                );

            setJobs(
                response.data
                    .recommendations
            );

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <h2
                style={{
                    color: "white",
                    marginBottom:
                        "20px"
                }}
            >
            
            </h2>

            {
                jobs.map(
                    (job, index) => (

                        <RecommendationCard
                            key={index}
                            title={job.title}
                            score={job.score}
                            platform={job.platform}
                            url={job.url}
                        />

                    )
                )
            }

        </div>

    );

}

export default RecommendationList;