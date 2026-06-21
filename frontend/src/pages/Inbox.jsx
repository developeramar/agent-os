import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailSidebar from "../components/EmailSidebar";
import api from "../services/api";
import {
  useNavigate
} from "react-router-dom";

function Inbox() {

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmails();
  }, []);

  async function archiveEmail(
    emailId
  ) {

    alert(
      `Archive Email: ${emailId}`
    );

  }


  async function markAsRead(
    emailId
  ) {

    alert(
      `Mark Read: ${emailId}`
    );

  }


  async function
    createInterviewReminder(
      email
    ) {

    try {

      await api.post(
        "/user/reminders",
        {

          title:
            email.subject,

          description:

            `${email.summary}

From:
${email.from}`,

          date:
            new Date()
              .toISOString()
              .split("T")[0],

          time:
            "10:00",

          status:
            "Pending"

        }
      );

      alert(
        "Reminder Created"
      );

    } catch (error) {

      console.error(
        error
      );

    }

  }




  function handleAction(
    action,
    email
  ) {

    switch (action) {

      case "Generate Reply":

        navigate(
          "/emails",
          {
            state: {
              email
            }
          }
        );

        break;

      case "Create Reminder":

        createInterviewReminder(
          email
        );

        break;

      case "View Report":

        alert(
          "Opening Email Details..."
        );

        break;

      case "Open Link":

        alert(
          "Open Link Coming Soon"
        );

        break;

      case "Track Order":

        alert(
          "Track Order Coming Soon"
        );

        break;

      case "Mark Read":

        markAsRead(
          email.id
        );

        break;

      case "Archive":

        archiveEmail(
          email.id
        );

        break;

      default:

        console.log(
          action
        );

    }

  }

  async function fetchEmails() {
    try {

      const response =
        await api.get(
          "/user/gmail/intelligence"
        );

      setEmails(
        response.data.emails
      );



    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  async function createInterviewReminder(email) {

    try {

      await api.post(
        "/user/reminders",
        {
          title:
            email.subject,
          description:

            `${email.summary}

From:
${email.from}`,
          date: new Date()
            .toISOString()
            .split("T")[0],
          time: "10:00",
          status: "Pending"
        }
      );

      alert("Reminder Created");

    } catch (error) {

      console.error(error);

    }
  }

  const unreadCount =
    emails.filter(
      e => e.unread
    ).length;

  const interviewCount =
    emails.filter(
      e => e.interviewDetected
    ).length;

  const offerCount =
    emails.filter(
      e => e.offerDetected
    ).length;

  const highPriorityCount =
    emails.filter(
      e =>
        e.priority === "High" ||
        e.priority === "Critical"
    ).length;

  function priorityColor(priority) {

    switch (priority) {

      case "Critical":
        return "#ef4444";

      case "High":
        return "#f97316";

      case "Medium":
        return "#eab308";

      default:
        return "#22c55e";

    }
  }

  function alertLabel(email) {

    if (email.offerDetected)
      return "🎉 Job Offer";

    if (email.interviewDetected)
      return "🎯 Interview Alert";

    if (email.otpDetected)
      return "🔐 OTP Alert";

    if (
      email.category ===
      "Finance"
    )
      return "💰 Finance Alert";

    if (
      email.cardType ===
      "Delivery Confirmation"
    )
      return "📦 Delivery Update";

    return "📬 Important Email";
  }

  return (
    <>
      <Header />

      <div
        style={{
          background: "#0f172a",
          minHeight: "100vh",
          padding: "24px"
        }}
      >

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <div
            style={{
              flex: "0 0 250px"
            }}
          >
            <EmailSidebar />
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "300px",
              color: "white"
            }}
          >

            <div
              style={{
                background: "#111827",
                borderRadius: "24px",
                padding: "35px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                marginBottom: "25px"
              }}
            >

              <h1>
                📬 Inbox Intelligence
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                  lineHeight: "1.8"
                }}
              >
                Your AI Email Chief of Staff.
                AgentOS reads, prioritizes
                and highlights the emails
                that actually matter.
              </p>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(180px,1fr))",
                gap: "15px",
                marginBottom: "30px"
              }}
            >

              {[
                ["📬 Unread", unreadCount],
                ["🎯 Interviews", interviewCount],
                ["🎉 Offers", offerCount],
                ["⚡ High Priority", highPriorityCount]
              ].map(
                (item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#1e293b",
                      borderRadius: "18px",
                      padding: "24px",
                      border:
                        "1px solid rgba(255,255,255,0.08)"
                    }}
                  >
                    <h3>
                      {item[0]}
                    </h3>

                    <h1
                      style={{
                        marginTop: "10px"
                      }}
                    >
                      {item[1]}
                    </h1>

                  </div>
                )
              )}

            </div>

            <h2
              style={{
                marginBottom: "20px"
              }}
            >
              ⭐ Today's Priority Feed
            </h2>

            {loading && (
              <h3>
                Loading...
              </h3>
            )}

            {!loading &&
              emails.length === 0 && (
                <div
                  style={{
                    background: "#1e293b",
                    padding: "30px",
                    borderRadius: "18px"
                  }}
                >
                  🎉 Inbox Under Control
                </div>
              )}

            {emails.map(
              (email) => (

                <div
                  key={email.id}
                  style={{
                    background: "#1e293b",
                    borderRadius: "20px",
                    padding: "24px",
                    marginBottom: "20px",
                    border:
                      "1px solid rgba(255,255,255,0.08)"
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      gap: "10px",
                      flexWrap: "wrap"
                    }}
                  >

                    <div>

                      <div
                        style={{
                          color: "#60a5fa",
                          fontWeight: "700",
                          marginBottom: "10px"
                        }}
                      >
                        {alertLabel(email)}
                      </div>

                      <h3>
                        {email.subject}
                      </h3>

                      {email.unread && (
                        <div
                          style={{
                            color: "#22c55e",
                            fontSize: "13px"
                          }}
                        >
                          ● Unread
                        </div>
                      )}

                    </div>

                    <div
                      style={{
                        background:
                          priorityColor(
                            email.priority
                          ),
                        padding:
                          "8px 12px",
                        borderRadius:
                          "999px",
                        height:
                          "fit-content"
                      }}
                    >
                      {email.priority}
                    </div>

                  </div>

                  <p
                    style={{
                      color: "#94a3b8",
                      marginTop: "12px"
                    }}
                  >
                    {email.from}
                  </p>

                  <div
                    style={{
                      background: "#111827",
                      padding: "14px",
                      borderRadius: "12px",
                      marginTop: "15px"
                    }}
                  >
                    <strong>
                      AI Summary
                    </strong>

                    <p
                      style={{
                        marginTop: "8px",
                        lineHeight: "1.7"
                      }}
                    >
                      {email.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#172554",
                      padding: "12px",
                      borderRadius: "12px",
                      marginTop: "15px"
                    }}
                  >
                    ⭐ Recommended Action:
                    {" "}
                    {email.recommendedAction ||
                      "Review Email"}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "18px"
                    }}
                  >

                    {email.actions?.map(
                      (
                        action,
                        index
                      ) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleAction(
                              action,
                              email
                            )
                          }
                          style={{
                            border: "none",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            cursor: "pointer"
                          }}
                        >
                          {action}
                        </button>
                      )
                    )}

                    {email.interviewDetected && (
                      <button
                        onClick={() =>
                          createInterviewReminder(
                            email
                          )
                        }
                        style={{
                          background:
                            "#2563eb",
                          color:
                            "white",
                          border:
                            "none",
                          padding:
                            "10px 14px",
                          borderRadius:
                            "10px",
                          cursor:
                            "pointer"
                        }}
                      >
                        📅 Create Reminder
                      </button>
                    )}

                    <button
                      onClick={() =>
                        archiveEmail(
                          email.id
                        )
                      }
                      style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                    >
                      📦 Archive
                    </button>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Inbox;
