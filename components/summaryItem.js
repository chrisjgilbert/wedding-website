import Image from "next/image";

import styles from "../styles/components/SummaryItem.module.css";

export default function SummaryItem({ topic, title, copy, image }) {
  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${image}`}
          layout="fill"
          alt={topic}
          objectFit="cover"
        />
      </div>
      <div className={styles.contentContainer}>
        <span>{topic}</span>
        <h2>{title}</h2>
        <hr />
        <p>{copy}</p>
      </div>
    </li>
  );
}
