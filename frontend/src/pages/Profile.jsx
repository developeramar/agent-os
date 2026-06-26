

// NOTE:
// This is a starter premium profile component replacing the old UI.
// It keeps the same imports and fetchAccount/connectGmail logic.
// Replace your Profile.jsx with this file and adjust styles as needed.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";

export default function Profile() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchAccount(); }, []);

  async function fetchAccount() {
    try {
      const res = await api.get("/user/my-account");
      setAccount(res.data.user);
    } finally {
      setLoading(false);
    }
  }

  function connectGmail() {
    const user = JSON.parse(localStorage.getItem("user"));
    window.location.href =
      `https://agent-os-a7sp.onrender.com/auth/google?userId=${user.id}`;
  }

  if (loading) {
    return (
      <div style={{background:"#0f172a",color:"#fff",height:"100vh",display:"grid",placeItems:"center"}}>
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  const pro = account?.plan === "pro";
  const emailLimit = pro ? 1000 : (account?.emailLimit ?? 20);
  const aiCredits = pro ? 500 : (account?.aiCredits ?? 50);
  const reminderCredits = pro ? 500 : (account?.reminderCredits ?? 20);

  return (
    <>
      <Header />
      <div style={{background:"#0f172a",minHeight:"100vh",padding:30,color:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>

          <div style={{
            background:"linear-gradient(135deg,#312e81,#1e293b)",
            borderRadius:24,padding:30,display:"flex",
            justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
            <div style={{display:"flex",gap:20,alignItems:"center"}}>
              <div style={{
                width:90,height:90,borderRadius:"50%",
                background:"#facc15",color:"#111827",
                display:"grid",placeItems:"center",
                fontWeight:"bold",fontSize:34}}>
                {account?.name?.charAt(0)}
              </div>
              <div>
                <h1>{account?.name}</h1>
                <p>{account?.email}</p>
                <p>Joined: {new Date(account?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div style={{textAlign:"right"}}>
              <div style={{
                display:"inline-block",
                background:pro?"#22c55e":"#334155",
                padding:"8px 18px",
                borderRadius:999,
                fontWeight:700}}>
                {pro ? "⭐ PRO MEMBER" : "FREE PLAN"}
              </div>

              <p style={{marginTop:15}}>Status: {account?.planStatus ?? "active"}</p>
              <p>Expires: {account?.planExpiryDate ? new Date(account.planExpiryDate).toLocaleDateString() : "-"}</p>
            </div>
          </div>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
            gap:20,
            marginTop:25}}>

            <Card title="💳 Subscription">
              <p>Plan: <b>{account?.plan?.toUpperCase()}</b></p>
              <p>Email Limit: {emailLimit}</p>
              <p>Started: {account?.planStartDate ? new Date(account.planStartDate).toLocaleDateString() : "-"}</p>
              {!pro && <button style={btn} onClick={()=>navigate("/pricing")}>Upgrade to Pro</button>}
            </Card>

            <Card title="📈 Credits">
              <p>📧 Email Credits : {emailLimit}</p>
              <p>🤖 AI Credits : {aiCredits}</p>
              <p>⏰ Reminder Credits : {reminderCredits}</p>
            </Card>

            <Card title="📧 Gmail">
              <p>{account?.gmailConnected ? "✅ Connected" : "❌ Not Connected"}</p>
              {!account?.gmailConnected &&
                <button style={btn} onClick={connectGmail}>Connect Gmail</button>}
            </Card>

            <Card title="📊 Usage">
              <p>Email Used : {account?.emailUsage}</p>
              <p>Remaining : {Math.max(0,emailLimit-(account?.emailUsage||0))}</p>
            </Card>

            <Card title="💰 Payment History">
              {(account?.paymentHistory?.length ?? 0)===0 ? (
                <p>No payments yet.</p>
              ) : (
                account.paymentHistory.map((p,i)=>(
                  <div key={i} style={{padding:"10px 0",borderBottom:"1px solid #334155"}}>
                    <div>₹{p.amount}</div>
                    <div>{p.status}</div>
                    <div>{p.paymentId}</div>
                  </div>
                ))
              )}
            </Card>

            <Card title="⚙️ Account">
              <button style={btn}>Edit Profile</button>
              <button style={{...btn,background:"#dc2626",marginLeft:10}}>Logout</button>
            </Card>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Card({title,children}){
  return(
    <div style={{background:"#1e293b",padding:24,borderRadius:20,border:"1px solid #334155"}}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

const btn={
  marginTop:15,
  background:"#2563eb",
  color:"#fff",
  border:"none",
  borderRadius:12,
  padding:"12px 18px",
  cursor:"pointer"
};