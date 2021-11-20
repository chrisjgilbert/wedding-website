import styles from "../styles/components/PageHeader.module.css"

export default function PageHeader() {
    return (
        <div className={styles.container}>
            <span className={styles.topic}>Places to visit</span>
            <h1 className={styles.h1}>Our favourite villages and towns in Provence</h1>
            <p>
                Provence is famous for its beautiful hillside villages.
                From the quintesiaally xxx to the xxx here is a list of some of our favourite xxxxxx
            </p>
        </div>
    )
}
