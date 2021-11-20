import styles from '../styles/components/Container.module.css'

export default function Container({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
