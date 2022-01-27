import Image from "next/image";

import Tag from "./tag";
import Hr from "./hr";

import styles from "../styles/components/SummaryItem.module.css";

export default function SummaryItem({ topic, title, copy, image }) {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${image}`}
          layout="fill"
          alt={topic}
          objectFit="cover"
        />
      </div>
      <div className={styles.contentContainer}>
        <Tag text={topic} />
        <h2>{title}</h2>
        <Hr />
        <p>{copy}</p>
      </div>
    </>
  );
}
