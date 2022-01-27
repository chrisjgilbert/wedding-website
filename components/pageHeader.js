import styles from "../styles/components/PageHeader.module.css";
import Tag from "./tag";

export default function PageHeader({ span, h1, p }) {
  return (
    <div className={styles.container}>
      <Tag text={span} />
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
}
