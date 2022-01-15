import Image from "next/image";

import styles from "../styles/components/Recommendation.module.css";

export default function Recommendation({ title, content, image }) {
  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${image}`}
          layout="fill"
          alt={title}
          objectFit="contain"
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </li>
  );
}
