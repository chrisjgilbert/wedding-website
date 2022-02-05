import Link from "next/link";
import { useState } from "react";

import styles from "../styles/components/Nav.module.css";

export default function Nav() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const navLink = (path, text) => {
    return (
      <Link href={path}>
        <a onClick={toggleMobileMenu}>{text}</a>
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navTitle}>{navLink("/", "Provence 2022")}</div>
        <nav className={`${mobileMenuActive ? styles.activeNav : ""}`}>
          <ul className={styles.navList}>
            <li>{navLink("/places-to-visit", "Places to visit")}</li>
            <li>{navLink("/places-to-eat", "Places to eat")}</li>
            <li>{navLink("/places-to-stay", "Places to stay")}</li>
            <li>{navLink("/other-activities", "Other activities")}</li>
          </ul>
        </nav>
        <button
          onClick={toggleMobileMenu}
          className={`${styles.hamburgerMenu} ${
            mobileMenuActive ? styles.active : ""
          }`}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </button>
      </div>
    </header>
  );
}
