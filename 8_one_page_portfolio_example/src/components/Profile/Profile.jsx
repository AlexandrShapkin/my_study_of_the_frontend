import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import styles from "./Profile.module.css";

function Profile({ photo, fullName, occupation, className }) {
  return (
    <div className={[className, styles.container].join(" ")}>
      <ProfilePhoto photo={photo} style={{ width: "220px", height: "220px"}} />
      <h1 className={styles.name}>{fullName?.name}</h1>
      <h1 className={styles.name}>{fullName?.surname}</h1>
      <p className={styles.occupation}>{occupation}</p>
    </div>
  );
}

export default Profile;
