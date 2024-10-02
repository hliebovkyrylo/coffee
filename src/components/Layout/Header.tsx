import React from "react";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Coffee</p>
      <ul className={styles.header_nav}>
        <li>
          <a className={styles.header_nav_link} href="#blog">
            Blog
          </a>
        </li>
        <li>
          <a className={styles.header_nav_link} href="#shop">
            Shop
          </a>
        </li>
        <li>
          <a className={styles.header_nav_link} href="#about">
            About
          </a>
        </li>
      </ul>
    </header>
  );
}
