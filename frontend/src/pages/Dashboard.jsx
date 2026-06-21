import Sidebar from "../components/Sidebar";
import TopStats from "../components/TopStats";
import PlatformStats from "../components/PlatformStats";
import RecommendationCard
    from "../components/RecommendationCard";

import ApplicationList
    from "../components/ApplicationList";

import RecommendationList
    from "../components/RecommendationList";

function Dashboard() {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#0f172a",

            }}
        >
            <Sidebar />

            <div
                style={{
                    flex: 1,
                    padding: "30px",
                    marginLeft: "150px",
                }}
            >
                <h1
                    style={{
                        color: "white",
                        marginBottom: "30px",
                    }}
                >
                    Dashboard
                </h1>
            

                <TopStats />

                <PlatformStats />

                <h2
                    style={{
                        color: "white",
                        marginBottom: "20px",
                    }}
                >
                    Top Matches | According to Resume
                </h2>

                <RecommendationList />

                <ApplicationList />
            </div>
        </div>
    );
}

export default Dashboard;