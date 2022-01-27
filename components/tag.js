import styles from "../styles/components/Tag.module.css";

export default function Tag({ text }) {
  return <span className={styles.tag}>{text}</span>;
}
