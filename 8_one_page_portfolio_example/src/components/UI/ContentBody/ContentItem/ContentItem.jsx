import React from 'react';
import styles from './ContentItem.module.css';

function ContentItem({ title, content, id }) {
  return (
    <div className={styles.item} id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <hr className={styles.hr} />
    </div>
  );
}

export default ContentItem;