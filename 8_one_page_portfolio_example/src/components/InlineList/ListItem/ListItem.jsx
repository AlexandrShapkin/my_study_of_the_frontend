import React from "react";
import styles from "./ListItem.module.css";
import link from "./link.png";

function ListItem({ item, className, style }) {
  if (item?.link === "") {
    item.link = undefined;
  }

  return (
    <div className={[className].join(" ")} style={style}>
      <a className={styles.item} href={item?.link}>
        {item?.link !== undefined ? (
          <img className={styles.linkIcon} src={link} alt="Ссылка" />
        ) : null}
        {item?.name}
      </a>
    </div>
  );
}

export default ListItem;
