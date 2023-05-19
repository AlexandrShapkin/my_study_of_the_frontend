import React from "react";
import ContentItem from "./ContentItem/ContentItem";
import styles from "./ContentBody.module.css";

function ContentBody({ items }) {
  return (
    <div className={styles.contentBody}>
      {items?.map((item, index) => (
        <ContentItem
          title={item?.title}
          content={item?.content}
          key={Date.now() + index}
          id={`contentItem-${index}`}
        />
      ))}
    </div>
  );
}

export default ContentBody;
