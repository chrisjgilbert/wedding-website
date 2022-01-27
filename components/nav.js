import Link from "next/link";

import styles from "../styles/components/Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.navWrapper}>
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
          <li>Other things to do</li>
        </ul>
      </nav>
    </header>
  );
}
