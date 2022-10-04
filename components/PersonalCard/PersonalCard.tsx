import Image from "next/image";
import React from "react";
import styles from "./PersonalCard.module.scss";
import ProfilePicture from "@public/pp.jpeg";

interface IPersonalCard {}

const MYSELF = {
  name: "Berna",
  lastName: "García",
  age: 27,
  facebook: "",
  twitter: "",
  linkedin: "",
};

function PersonalCard({}: IPersonalCard) {
  return (
    <div className={styles.personalCard}>
      <div className={styles.content}>
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          className={styles.profilePicture}
          width={90}
          height={90}
        />
        <div className={styles.description}>
          <p>Personal blog by {MYSELF.name}</p>
          <p>I explain JavaScript and React ⚛️</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
