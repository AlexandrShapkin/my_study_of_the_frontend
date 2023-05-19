import React from "react";
import styles from "./GeneralInformation.module.css";
import Profile from "../Profile/Profile";
import InlineList from "../InlineList/InlineList";

function GeneralInformation({ information, className, style }) {
  return (
    <div className={[className, styles.container].join(" ")} style={style}>
      <Profile
        style={{}}
        photo={information.photo}
        fullName={information.name}
        occupation={information.occupation}
      />
      <hr />
      <InlineList
        style={{}}
        className={styles.items}
        title={"Навыки"}
        items={information.skills}
      />
      <hr />
      <InlineList
        style={{}}
        className={styles.items}
        title={"Связаться со мной"}
        items={information.contacts}
      />
    </div>
  );
}

export default GeneralInformation;
