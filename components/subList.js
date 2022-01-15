import styles from "../styles/components/SubList.module.css";

export default function SubList({ items }) {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
