import React from "react";
import styles from "./NavigationBar.module.css";
import NavItem from "./NavItem/NavItem";

function NavigationBar({className, style, titles }) {
  function Color() {
    const colors = [
      "#cc241d",
      "#98971a",
      "#d79921",
      "#458588",
      "#b16286",
      "#689d6a",
    ];

    let i = 0;

    return function () {
      if (i >= colors.length) i = 0;
      return colors[i++];
    };
  }
  const getNextColor = Color();

  const handleNavItemClick = (index) => {
    const contentItem = document.getElementById(`contentItem-${index}`);
    if (contentItem) {
      contentItem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={[className, styles.bar].join(" ")}>
      {titles?.map((item, index) => (
        <NavItem
          content={item}
          style={{ backgroundColor: getNextColor() }}
          key={item + index}
          onClick={() => handleNavItemClick(index)}
        />
      ))}
    </div>
  );
}

export default NavigationBar;
