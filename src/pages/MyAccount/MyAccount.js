import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./MyAccount.scss";

export default function MyAccount() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    if (userLoggedIn) {
      axios
        .get(`http://localhost:8080/user/${userLoggedIn.id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Account</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}