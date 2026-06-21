import { useEffect, useState } from "react";
import api from "../services/api";

function ApplicationList() {

  const [applications,
    setApplications] =
    useState([]);

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
        response.data.applications
      );

    } catch (error) {

      console.log(error);

    }

  }

  function getStatusColor(
    status
  ) {

    switch (
      status?.toLowerCase()
    ) {

      case "applied":
        return "#16a34a";

      case "interview":
        return "#7c3aed";

      case "offer":
        return "#22c55e";

      case "rejected":
        return "#ef4444";

      case "recommended":
        return "#2563eb";

      case "queued":
        return "#f59e0b";

      default:
        return "#64748b";

    }

  }

  return (

    <div>

      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        Recent Applications
      </h2>

      {
        applications.map(
          (app, index) => (

            <div
              key={index}
              style={{
                background:
                  "#1e293b",
                color:
                  "white",
                padding:
                  "20px",
                marginBottom:
                  "15px",
                borderRadius:
                  "12px",
              }}
            >

              <h3
                style={{
                  marginBottom:
                    "10px",
                }}
              >
                {app.title}
              </h3>

              <span
                style={{
                  background:
                    getStatusColor(
                      app.status
                    ),
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
                {app.status}
              </span>

            </div>

          )
        )
      }

    </div>

  );

}

export default ApplicationList;