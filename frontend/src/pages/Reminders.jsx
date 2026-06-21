
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";

function Reminders() {

  const [reminders, setReminders] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  useEffect(() => {

    fetchReminders();

  }, []);

  async function fetchReminders() {

    try {

      const response =
        await api.get(
          "/user/reminders"
        );

      setReminders(
        response.data.reminders || []
      );

    } catch (error) {

      console.error(error);

    }

  }

  async function createReminder() {

    try {

      await api.post(
        "/user/reminders",
        {
          title,
          description,
          date,
          time
        }
      );

      setTitle("");
      setDescription("");
      setDate("");
      setTime("");

      fetchReminders();

    } catch (error) {

      console.error(error);

    }

  }

  async function markComplete(id) {

    try {

      await api.put(
        `/user/reminders/${id}`,
        {
          status:
            "Completed"
        }
      );

      fetchReminders();

    } catch (error) {

      console.error(error);

    }

  }

  async function deleteReminder(id) {

    try {

      await api.delete(
        `/user/reminders/${id}`
      );

      fetchReminders();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <>

      <Header />

      <div
        style={{
          background: "#0f172a",
          minHeight: "100vh",
          padding: "20px"
        }}
      >

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            color: "white"
          }}
        >

          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            📅 Reminder Agent
          </h1>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "18px",
              marginBottom: "30px",
              maxWidth: "700px",
              margin: "0 auto 30px auto"
            }}
          >

            <h2>
              Create Reminder
            </h2>

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                borderRadius: "8px"
              }}
            />

            <br />
            <br />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows="4"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px"
              }}
            />

            <br />
            <br />

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap"
              }}
            >

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(
                    e.target.value
                  )
                }
              />

              <input
                type="time"
                value={time}
                onChange={(e) =>
                  setTime(
                    e.target.value
                  )
                }
              />

            </div>

            <br />

            <button
              onClick={
                createReminder
              }
              style={{
                padding:
                  "10px 20px",
                border:
                  "none",
                borderRadius:
                  "8px",
                cursor:
                  "pointer"
              }}
            >
              Create Reminder
            </button>

          </div>

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Upcoming Reminders
          </h2>

          {

            reminders.length === 0 && (

              <p>
                No reminders found.
              </p>

            )

          }

          {

            reminders.map(
              (
                reminder
              ) => (

                <div
                  key={
                    reminder.id
                  }
                  style={{
                    background:
                      "#1e293b",
                    padding:
                      "20px",
                    borderRadius:
                      "15px",
                    marginBottom:
                      "15px"
                  }}
                >

                  <h3>
                    {
                      reminder.title
                    }
                  </h3>

                  <p>
                    {
                      reminder.description
                    }
                  </p>

                  <p>
                    📅 {
                      reminder.date
                    }
                    {" "}
                    ⏰ {
                      reminder.time
                    }
                  </p>

                  <p>
                    Status:
                    {" "}
                    <strong>
                      {
                        reminder.status
                      }
                    </strong>
                  </p>

                  <div
                    style={{
                      display:
                        "flex",
                      gap:
                        "10px",
                      flexWrap:
                        "wrap"
                    }}
                  >

                    <button
                      onClick={() =>
                        markComplete(
                          reminder.id
                        )
                      }
                    >
                      Complete
                    </button>

                    <button
                      onClick={() =>
                        deleteReminder(
                          reminder.id
                        )
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              )

            )

          }

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Reminders;

