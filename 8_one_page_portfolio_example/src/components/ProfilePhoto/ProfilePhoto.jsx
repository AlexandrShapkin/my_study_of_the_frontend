import React from "react";
import profilePhoto from "./photo.png";
import styles from "./ProfilePhoto.module.css";

function ProfilePhoto({ photo, className, style }) {
  let pic = null;
  try {
    pic = require("../../" + photo);
  } catch {}

  return (
    <div className={[className, styles.photoContainer].join(" ")} style={style}>
      <div className={styles.photoContainer__substrate}>
        <img
          src={pic ? pic : profilePhoto}
          alt=""
          className={styles.substrate__profilePhoto}
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
