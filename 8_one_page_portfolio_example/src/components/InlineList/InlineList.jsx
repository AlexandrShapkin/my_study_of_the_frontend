import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./InlineList.module.css";

function InlineList({ items, title, className, style }) {
  let key = 0;
  return (
    <div className={[className].join(" ")} style={style}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items?.map((item) => (
          <ListItem
            style={{}}
            className={styles.item}
            item={item}
            key={Date.now() + key++}
          />
        ))}
      </div>
    </div>
  );
}

export default InlineList;
