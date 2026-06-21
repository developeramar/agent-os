import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Recommendations() {

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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
        response.data.recommendations || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div
      style={{
        display: "flex",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          color: "white",
          padding: "30px",
          marginLeft: "200px",
        }}
      >

        <h1>
          Recommendations
        </h1>

        {
          loading && (
            <h3>
              Loading...
            </h3>
          )
        }

        {
          !loading &&
          jobs.length === 0 && (
            <h3>
              No recommendations found
            </h3>
          )
        }

        {
          jobs.map(
            (job, index) => (

              <div
                key={index}
                style={{
                  background:
                    "#1e293b",
                  padding:
                    "20px",
                  marginBottom:
                    "20px",
                  borderRadius:
                    "12px",
                }}
              >

                <h2>
                  {job.title}
                </h2>

                <p>
                  Score:
                  {" "}
                  {job.score}%
                </p>

                <p>
                  Platform:
                  {" "}
                  {job.platform}
                </p>

                <button
                  onClick={() =>
                    window.open(
                      job.url,
                      "_blank"
                    )
                  }
                  style={{
                    padding:
                      "10px 20px",
                    border:
                      "none",
                    borderRadius:
                      "8px",
                    cursor:
                      "pointer",
                  }}
                >
                  Apply Now
                </button>

              </div>

            )
          )
        }

      </div>

    </div>

  );

}

export default Recommendations;