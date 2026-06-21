import { useEffect, useState } from "react";
import api from "../services/api";

function ProfileSummary() {

  const [profile,
    setProfile] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  async function fetchProfile() {

    try {

      const response =
        await api.get(
          "/user/profile"
        );

      setProfile(
        response.data.profile
      );

    } catch (error) {

      console.error(error);

    }

  }

  if (!profile) {

    return null;

  }

  return (

    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "20px",
        color: "white",
      }}
    >

      <h2>
        Welcome,{" "}
        {
          profile.personalInfo.name
        }
      </h2>

      <p>
        {
          profile.personalInfo.email
        }
      </p>

      <br />

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "10px",
          marginLeft:"130px",
          alignItems:"center",
          textAlign:"center"
        }}
      >

        <span
          style={{
            background: "#16a34a",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Resume Uploaded
        </span>

        <span
          style={{
            background: "#2563eb",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          AI Profile Ready
        </span>

        <span
          style={{
            background: "#7c3aed",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            
            fontWeight: "600",
          }}
        >
          Recommendations Active
        </span>

      </div>

      {/*

      <h3>
        Preferred Roles
      </h3>

      <ul>

        {
          profile.preferredRoles
            ?.slice(0, 3)
            .map(
              (
                role,
                index
              ) => (

                <li
                  key={index}
                >
                  {role}
                </li>

              )
            )
        }

      </ul>

      */}

    </div>

  );

}

export default ProfileSummary;