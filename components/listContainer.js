import styles from "../styles/components/ListContainer.module.css"

export default function ListContainer({ children }) {
    return (
        <ul className={styles.container}>
            {children}
        </ul>
    )
}
