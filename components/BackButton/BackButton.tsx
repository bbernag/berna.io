import Router from "next/router";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./BackButton.module.scss";

interface IBackButton {}

function BackButton({}: IBackButton) {
  return (
    <div className={styles.back}>
      <IoArrowBackOutline onClick={Router.back} size="2rem" />
    </div>
  );
}

export default BackButton;
