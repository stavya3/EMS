import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"

const App = () => {

  const [user, setUser] = useState('');

  

  const handleLogin = (email: string, password: string) => {
      if (email == 'admin@me.com' && password == '123'){
        // this is kinda hard coded, need to get the email and stuff from the db and verify
        setUser('admin');
      } else if (email == 'user@me.com' && password == '123'){
        setUser('employee');
      } else {
        alert("Invalid Credentials")
      }
  }
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  })
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : <AdminDashboard />}
      
    </>
  );
};

export default App;
