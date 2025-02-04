import React from "react";
import { username, city } from "../data/user";  // Importing named exports

const Home = () => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Location: {city}</p>
    </div>
  );
};

export default Home;


 
