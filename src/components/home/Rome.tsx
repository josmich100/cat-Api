import Axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import styles from "./Home.module.css";

const Rome = () => {
  const [catImage, setCatImage] = useState(
    "https://i.stack.imgur.com/7VozH.gif"
  );

  useEffect(() => {
    getImage();

    // return () => {
    //   second
    // }
  }, []);

  const getImage = () => {
    Axios.get("https://api.thecatapi.com/v1/images/search?format=json", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "27fc5592-e187-42f5-a64a-88a87021b9dd",
      },
    }).then((response) => {
      setCatImage(response.data[0]["url"]);
      console.log(response.data[0]);
      localStorage.setItem("catImage", JSON.stringify(response.data));
    });
  };
  const like = () => {
    const catImage = JSON.parse(localStorage.getItem("catImage")!);

    console.log(catImage[0]["url"]);
    const body = {
      image_id: catImage[0]["id"],
      sub_id: catImage[0]["url"],
      value: 2,
    };

    Axios.post("https://api.thecatapi.com/v1/votes", body, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "27fc5592-e187-42f5-a64a-88a87021b9dd",
      },
    }).then((response) => {
      console.log("success");
      getImage();
    });
  };
  const dislike = () => {
    const catImage = JSON.parse(localStorage.getItem("catImage")!);

    console.log(catImage[0]["url"]);
    const body = {
      image_id: catImage[0]["id"],
      sub_id: catImage[0]["url"],
      value: 3,
    };

    Axios.post("https://api.thecatapi.com/v1/votes", body, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "27fc5592-e187-42f5-a64a-88a87021b9dd",
      },
    }).then((response) => {
      console.log("success");
      getImage();
    });
  };

  return (
    <div className={styles.home}>
      <img src={catImage} className={styles.image} alt="logo" />
      <div className={styles.buttons}>
        <div onClick={like}> Like </div>
        <button onClick={getImage}>Get Image</button>
        <button onClick={dislike}>Dislike</button>
      </div>
    </div>
  );
};
export default Rome;
