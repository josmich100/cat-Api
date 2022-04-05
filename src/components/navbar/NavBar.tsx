import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h1>Cats</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/likes">Likes</Link>
        <Link to="/dislikes">Dislikes</Link>
      </div>
    </div>
  );
};

export default NavBar;
