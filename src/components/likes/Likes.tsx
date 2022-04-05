import Axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import styles from "./Likes.module.css";

type User = {
  image_id: string;
  sub_id: string;
  value: number;
};
const Likes = () => {
  const [catLikes, setCatLike] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    Axios.get("https://api.thecatapi.com/v1/votes", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "27fc5592-e187-42f5-a64a-88a87021b9dd",
      },
    }).then((response) => {
      setCatLike(response.data);
      console.log(response.data);
      //localStorage.setItem("catImage", JSON.stringify(response.data));
    });
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.home}>
        <h1>Your Likes</h1>
        <div className={styles.cats}>
          {(catLikes as User[]).map((catLike, id) => {
            return (
              <div key={id}>
                {catLike.value === 2 && (
                  <img
                    src={catLike.sub_id}
                    className={styles.image}
                    alt="logo"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Likes;
