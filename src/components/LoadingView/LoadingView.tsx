import React from "react";
import { Icon } from "antd";
import styles from "./LoadingView.module.scss";

export default function LoadingView() {
  return (
    <div className={styles.container}>
      <Icon
        className={styles.spinner}
        type="loading"
      />
    </div>
  );
}
