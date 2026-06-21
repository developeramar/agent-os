import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Applications() {

  const [applications,
    setApplications] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    fetchApplications();

  }, []);

  async function fetchApplications() {

    try {

      const response =
        await api.get(
          "/user/applications"
        );

      setApplications(
        response.data.applications || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function updateStatus(
    url,
    status
  ) {

    try {

      await api.put(
        "/user/application-status",
        {
          url,
          status
        }
      );

      fetchApplications();

    } catch (error) {

      console.error(error);

      alert(
        "Failed to update status"
      );

    }

  }

  function getStatusColor(
    status
  ) {

    switch (
      status?.toLowerCase()
    ) {

      case "applied":
        return "#22c55e";

      case "recommended":
        return "#3b82f6";

      case "queued":
        return "#f59e0b";

      case "interview":
        return "#8b5cf6";

      case "offer":
        return "#10b981";

      case "rejected":
        return "#ef4444";

      default:
        return "#94a3b8";

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
          Applications
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
          applications.length === 0 && (
            <h3>
              No Applications Found
            </h3>
          )
        }

        {
          applications.map(
            (
              app,
              index
            ) => (

              <div
                key={index}
                style={{
                  background:
                    "#1e293b",
                  padding:
                    "20px",
                  borderRadius:
                    "12px",
                  marginBottom:
                    "20px",
                }}
              >

                <h2>
                  {app.title}
                </h2>

                <p>
                  Score:
                  {" "}
                  {app.score || 0}%
                </p>

                <p>
                  Status:
                  {" "}
                  <span
                    style={{
                      color:
                        getStatusColor(
                          app.status
                        ),
                      fontWeight:
                        "bold",
                    }}
                  >
                    {app.status}
                  </span>
                </p>

                <div
                  style={{
                    marginTop: "15px",
                  }}
                >

                  <select
                    value={
                      app.status
                    }
                    onChange={(e) =>
                      updateStatus(
                        app.url,
                        e.target.value
                      )
                    }
                    style={{
                      padding:
                        "10px",
                      borderRadius:
                        "8px",
                    }}
                  >

                    <option value="Recommended">
                      Recommended
                    </option>

                    <option value="Queued">
                      Queued
                    </option>

                    <option value="Applied">
                      Applied
                    </option>

                    <option value="Interview">
                      Interview
                    </option>

                    <option value="Offer">
                      Offer
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>

                  </select>

                </div>

                <p
                  style={{
                    marginTop: "15px",
                  }}
                >
                  Saved:
                  {" "}
                  {app.savedAt}
                </p>

              </div>

            )
          )
        }

      </div>

    </div>

  );

}

export default Applications;