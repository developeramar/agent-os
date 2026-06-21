import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Link,
  useLocation
} from "react-router-dom";

function Emails() {
  const [drafts, setDrafts] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [draftRecipients, setDraftRecipients] = useState({});
  const [sending, setSending] = useState(false);
  const location = useLocation();

  useEffect(() => {

    fetchDrafts();

    if (
      location.state?.email
    ) {

      const email =
        location.state.email;

      setPrompt(

        `Generate a professional reply for:

Subject:
${email.subject}

From:
${email.from}

Summary:
${email.summary}

Intent:
${email.intent}`

      );

    }

  }, []);

  async function fetchDrafts() {
    try {
      const response = await api.get("/user/emails");
      setDrafts(response.data.drafts || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function generateDraft() {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setLoading(true);
      const response = await api.post("/user/emails/generate", { prompt });
      setGeneratedDraft(response.data.draft);
    } catch (error) {
      console.error(error);
      alert("Failed to generate draft");
    } finally {
      setLoading(false);
    }
  }

  async function saveGeneratedDraft() {
    if (!generatedDraft) return;

    try {
      await api.post("/user/emails", {
        to: "Not Specified",
        subject: generatedDraft.subject,
        body: generatedDraft.body
      });

      alert("Draft Saved Successfully");
      fetchDrafts();
    } catch (error) {
      console.error(error);
    }
  }

  async function sendGeneratedEmail() {
    if (!recipientEmail || !generatedDraft) {
      return alert("Enter recipient email");
    }

    try {
      setSending(true);

      await api.post("/user/gmail/send", {
        to: recipientEmail,
        subject: generatedDraft.subject,
        body: generatedDraft.body
      });

      alert("Email Sent Successfully 🚀");
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    } finally {
      setSending(false);
    }
  }

  async function deleteDraft(id) {
    try {
      await api.delete(`/user/emails/${id}`);
      fetchDrafts();
    } catch (error) {
      console.error(error);
    }
  }

  async function sendDraftEmail(draft) {

    const recipient =
      draftRecipients[draft.id];

    if (!recipient) {
      return alert(
        "Enter recipient email"
      );
    }

    try {

      await api.post(
        "/user/gmail/send",
        {
          to: recipient,
          subject: draft.subject,
          body: draft.body
        }
      );

      alert(
        "Draft Sent Successfully 🚀"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to send draft"
      );

    }

  }

  const card = {
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "24px"
  };

  return (
    <>
      <Header />

      <div style={{ background: "#0f172a", minHeight: "100vh", padding: "30px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", color: "white" }}>

          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <h1>📧 Email Agent</h1>
            <p style={{ color: "#94a3b8", maxWidth: "700px", margin: "10px auto" }}>
              Generate professional emails, manage drafts, send directly through Gmail
              and let AI help you take the next action.
            </p>

            <Link
              to="/inbox"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none"
              }}
            >
              Open Inbox Intelligence →
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px"
          }}>
            <div style={card}>📬 Gmail Connected</div>
            <div style={card}>✍️ AI Writer</div>
            <div style={card}>📄 Draft Manager</div>
            <div style={card}>⚡ Instant Send</div>
          </div>

          <div style={card}>
            <h2>AI Email Workspace</h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write a follow-up email after an interview..."
              rows={6}
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "12px",
                borderRadius: "12px"
              }}
            />

            <button
              onClick={generateDraft}
              style={{
                marginTop: "15px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              {loading ? "Generating..." : "Generate Draft"}
            </button>
          </div>

          {generatedDraft && (
            <div style={{ ...card, marginTop: "30px" }}>
              <h2>Generated Draft</h2>

              <p><strong>Subject:</strong> {generatedDraft.subject}</p>

              <div style={{
                marginTop: "15px",
                background: "#0f172a",
                padding: "15px",
                borderRadius: "12px",
                whiteSpace: "pre-wrap"
              }}>
                {generatedDraft.body}
              </div>

              <input
                type="email"
                placeholder="Recipient Email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "12px",
                  borderRadius: "10px"
                }}
              />

              <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "15px"
              }}>
                <button onClick={saveGeneratedDraft}>Save Draft</button>
                <button onClick={sendGeneratedEmail}>
                  {sending ? "Sending..." : "Send Email 🚀"}
                </button>
              </div>

              <div style={{
                marginTop: "25px",
                padding: "15px",
                background: "#111827",
                borderRadius: "12px"
              }}>
                <h3>🤖 Recommended Actions</h3>
                <p>✓ Save Draft</p>
                <p>✓ Send Email</p>
                <p>✓ Open Inbox Intelligence</p>
                <p>✓ Create Reminder</p>
              </div>
            </div>
          )}

          <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
            Saved Drafts
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px"
          }}>
            {drafts.map((draft) => (
              <div key={draft.id} style={card}>
                <h3>{draft.subject}</h3>

                <p style={{ color: "#cbd5e1" }}>
                  {draft.body?.length > 120
                    ? draft.body.substring(0, 120) + "..."
                    : draft.body}
                </p>

                <p style={{ color: "#94a3b8" }}>
                  Status: {draft.status}
                </p>

                <input
                  type="email"
                  placeholder="Recipient Email"
                  value={
                    draftRecipients[draft.id] || ""
                  }
                  onChange={(e) =>
                    setDraftRecipients({
                      ...draftRecipients,
                      [draft.id]:
                        e.target.value
                    })
                  }
                  style={{
                    width: "100%",
                    marginTop: "12px",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "12px"
                  }}
                >

                  <button
                    onClick={() =>
                      sendDraftEmail(draft)
                    }
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}
                  >
                    Send Email 🚀
                  </button>

                  <button
                    onClick={() =>
                      deleteDraft(draft.id)
                    }
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Emails;
