import styles from "../styles/components/Nav.module.css"

export default function Nav() {
    return (
        <header className={styles.container}>
            <nav>
                <ul className={styles.navWrapper}>
                    <li>
                        Places to visit
                    </li>
                    <li>
                        Places to eat
                    </li>
                    <li>
                        Provence 2022
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
