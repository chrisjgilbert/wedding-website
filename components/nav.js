import Link from "next/link";
import { useState } from "react";

import styles from "../styles/components/Nav.module.css";

export default function Nav() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const mobileMenu = () => {
    if (mobileMenuActive) {
      return (
        <ul className={styles.mobileMenu}>
          <li onClick={() => setMobileMenuActive(false)}>
            <Link href="/places-to-visit">Places to visit</Link>
          </li>
          <li onClick={() => setMobileMenuActive(false)}>
            <Link href="/places-to-eat">Places to eat</Link>
          </li>
          <li onClick={() => setMobileMenuActive(false)}>
            <Link href="/places-to-stay">Places to stay</Link>
          </li>
          <li onClick={() => setMobileMenuActive(false)}>
            <Link href="/other-activities">Other activities</Link>
          </li>
        </ul>
      );
    } else {
      return null;
    }
  };

  const desktopMenu = () => {
    return (
      <ul className={styles.desktopNavWrapper}>
        <li>
          <Link href="/places-to-visit">Places to visit</Link>
        </li>
        <li>
          <Link href="/places-to-eat">Places to eat</Link>
        </li>
        <li className={styles.navTitle}>
          <Link href="/">Provence 2022</Link>
        </li>
        <li>
          <Link href="/places-to-stay">Places to stay</Link>
        </li>
        <li>
          <Link href="/other-activities">Other activities</Link>
        </li>
      </ul>
    );
  };

  const hamburger = () => {
    return (
      <div
        onClick={toggleMobileMenu}
        className={`${styles.hamburger}, ${
          mobileMenuActive ? styles.active : null
        }`}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    );
  };

  return (
    <header className={styles.container}>
      <nav>
        {desktopMenu()}
        <div className={styles.mobileNavWrapper}>
          <ul>
            <li className={styles.navTitle}>
              <Link href="/">Provence 2022</Link>
            </li>
          </ul>
          {hamburger()}
        </div>
        {mobileMenu()}
      </nav>
    </header>
  );
}
