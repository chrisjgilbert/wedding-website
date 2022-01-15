import styles from "../styles/components/ListContainerItem.module.css";

export default function ListContainerItem({ children }) {
  return <li className={styles.container}>{children}</li>;
}
