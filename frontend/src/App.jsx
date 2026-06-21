import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import HomeRedirect from "./pages/HomeRedirect";
import UploadResume from "./pages/UploadResume";
import Dashboard from "./pages/Dashboard";
import Recommendations from "./pages/Recommendations";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Reminders from "./pages/Reminders";
import Emails from "./pages/Emails";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Onboarding
  from "./pages/Onboarding";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pricing"
          element={<Pricing />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/onboarding"
          element={
            <Onboarding />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* PROTECTED ROUTES */}

        <Route
          path="/emails"
          element={
            <ProtectedRoute>
              <Emails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadResume />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendations"
          element={
            <ProtectedRoute>
              <Recommendations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reminders"
          element={
            <ProtectedRoute>
              <Reminders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <Inbox />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;