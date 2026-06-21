require("dotenv").config();

const connectDB =
require("./config/db");

connectDB();

const express =
require("express");

console.log(
  "MONGO URI =>",
  process.env.MONGO_URI
);

const cors =
require("cors");
require("dotenv").config();
const jobAnalysisRoutes = require("./routes/jobAnalysisRoutes");
const path = require("path");

const jobMatchRoutes = require("./routes/jobMatchRoutes");
const agentRoutes = require("./routes/agentRoutes");
const aiRoutes = require("./routes/aiRoutes");
const jobSearchRoutes = require("./routes/jobSearchRoutes");
const jobRankingRoutes = require("./routes/jobRankingRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jobScoreRoutes = require("./routes/jobScoreRoutes");
const jobDetailsRoutes = require("./routes/jobDetailsRoutes");
const bestMatchRoutes = require("./routes/bestMatchRoutes");
const topMatchesRoutes = require("./routes/topMatchesRoutes");
const applyRoutes =require("./routes/applyRoutes");
const applyClickRoutes =require("./routes/applyClickRoutes");
const loginRoutes =require("./routes/loginRoutes");
const profileRoutes =require("./routes/profileRoutes");
const applicationTrackerRoutes = require("./routes/applicationTrackerRoutes");
const saveApplicationRoutes = require("./routes/saveApplicationRoutes");
const updateApplicationStatusRoutes = require("./routes/updateApplicationStatusRoutes");
const applicationStatsRoutes = require("./routes/applicationStatsRoutes");
const platformRoutes = require("./routes/platformRoutes");
const universalRoutes = require("./routes/universalRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const applyQueueRoutes = require("./routes/applyQueueRoutes");
const autoApplyRoutes = require("./routes/autoApplyRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const reminderRoutes = require("./routes/reminderRoutes");
const emailRoutes = require("./routes/emailRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");
const gmailRoutes = require("./routes/gmailRoutes");
const gmailReadRoutes = require("./routes/gmailReadRoutes");
const emailIntelligenceRoutes = require("./routes/emailIntelligenceRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);
app.use(cors());
app.use(express.json());

app.use("/api/agent", agentRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/job", jobAnalysisRoutes);
app.use("/api/job", jobSearchRoutes);
app.use("/api/job", jobRankingRoutes);
app.use("/api/resume", resumeRoutes);
console.log("SERVER IMPORTED RESUME ROUTES");
app.use("/api/job", jobMatchRoutes);
app.use("/api/job", jobScoreRoutes);
app.use("/api/job", jobDetailsRoutes);
app.use("/api/job", bestMatchRoutes);
app.use("/api/job", topMatchesRoutes);
app.use("/api/job",applyRoutes);
app.use("/api/job",applyClickRoutes);
app.use("/api/job",loginRoutes);
app.use("/api/user",profileRoutes);
app.use("/api/user",applicationTrackerRoutes);
app.use("/api/user",saveApplicationRoutes);
app.use("/api/user",updateApplicationStatusRoutes);
app.use("/api/user",applicationStatsRoutes);
app.use("/api",platformRoutes);
app.use("/api",universalRoutes);
app.use("/api/user",recommendationRoutes);
app.use("/api/user",applyQueueRoutes);
app.use("/api/user",autoApplyRoutes);
app.use("/api/user",sessionRoutes);
app.use("/api/user",reminderRoutes);
app.use("/api/user",emailRoutes);
app.use("/auth",googleAuthRoutes);
app.use("/api/user",gmailRoutes);
app.use("/api/user",gmailReadRoutes);
app.use("/api/user",emailIntelligenceRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/user", userRoutes);




const PORT = 5000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});