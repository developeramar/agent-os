import { useEffect, useState } from "react";
import api from "../services/api";

function TopStats() {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    fetchStats();

  }, []);

  async function fetchStats() {

    try {

      const response =
        await api.get(
          "/user/application-stats"
        );

      setStats(
        response.data.stats
      );

    } catch (error) {

      console.log(error);

    }

  }

  if (!stats) {

    return (
      <h2
        style={{
          color: "white"
        }}
      >
        Loading Stats...
      </h2>
    );

  }

  const cards = [
    {
      title: "Applications",
      value: stats.total
    },
    {
      title: "Applied",
      value: stats.applied
    },
    {
      title: "Interview",
      value: stats.interview
    },
    {
      title: "Offer",
      value: stats.offer
    }
  ];

  return (

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
      }}
    >

      {cards.map(
        (item) => (

          <div
            key={item.title}
            style={{
              background:
                "#1e293b",
              color:
                "white",
              padding:
                "20px",
              borderRadius:
                "15px",
              width:
                "150px",
            }}
          >

            <h3>
              {item.title}
            </h3>

            <h1>
              {item.value}
            </h1>

          </div>

        )
      )}

    </div>

  );

}

export default TopStats;