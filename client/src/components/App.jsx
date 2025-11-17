import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/sample")
      .then(res => setMsg(res.data.message))
      .catch(err => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div>
      <h1>MERN + Netlify + Render</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
