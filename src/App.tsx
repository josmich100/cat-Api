import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Rome from "./components/home/Rome";
import Likes from "./components/likes/Likes";
import Dislikes from "./components/dislikes/Dislikes";
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Rome />
    </div>
  );
}

export default App;
