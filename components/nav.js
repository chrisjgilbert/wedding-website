import Link from 'next/link'

import styles from "../styles/components/Nav.module.css"

export default function Nav() {
    return (
        <header className={styles.container}>
            <nav>
                <ul className={styles.navWrapper}>
                    <li>
                        <Link href="/places-to-visit">
                            <a>Places to visit</a>
                        </Link>
                    </li>
                    <li>
                        Places to eat
                    </li>
                    <li className={styles.navTitle}>
                        <Link href="/">
                            <a>Provence 2022</a>
                        </Link>
                    </li>
                    <li>
                        Places to stay
                    </li>
                    <li>
                        Other things to do
                    </li>
                </ul>
            </nav>
        </header>
    )
}
