import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { verifyUser } from './services/users';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className='App'>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Main currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
