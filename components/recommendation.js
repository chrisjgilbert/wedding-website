import Image from "next/image";

import SubList from "./subList";
import Hr from "./hr";

import styles from "../styles/components/Recommendation.module.css";

export default function Recommendation({ title, content, image, details }) {
  const footer = () => {
    if (details && details.length) {
      return (
        <>
          <Hr style={{ marginBottom: "1rem" }} />
          <SubList items={details} />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
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
        {footer()}
      </div>
    </>
  );
}
