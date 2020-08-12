import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { verifyUser } from "./services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  };

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Main setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
