import React from 'react';
import styles from './NavItem.module.css';

function NavItem({content, style, onClick}) {
  return (
    <button style={style} className={styles.item} onClick={onClick}>
      {content}
    </button>
  );
}

export default NavItem;