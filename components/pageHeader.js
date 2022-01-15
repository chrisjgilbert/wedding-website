import styles from "../styles/components/PageHeader.module.css";

export default function PageHeader({ span, h1, p }) {
  return (
    <div className={styles.container}>
      <span>{span}</span>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
}
