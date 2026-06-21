import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function HomeRedirect() {

  const navigate =
    useNavigate();

  useEffect(() => {

    checkProfile();

  }, []);

  async function checkProfile() {

    try {

      await api.get(
        "/user/profile"
      );

      navigate(
        "/dashboard"
      );

    } catch (error) {

      navigate(
        "/upload"
      );

    }

  }

  return (

    <h2
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      Loading AgentOS...
    </h2>

  );

}

export default HomeRedirect;