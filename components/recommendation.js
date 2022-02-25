import Image from "next/image";

import SubList from "./subList";
import Hr from "./hr";

import styles from "../styles/components/Recommendation.module.css";

export default function Recommendation({
  title,
  content,
  image,
  details,
  link,
}) {
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
    <a href={link} target="_blank">
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${image}`}
          layout="responsive"
          alt={title}
          height={500}
          width={500}
          objectFit="cover"
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <p>{content}</p>
        {footer()}
      </div>
    </a>
  );
}
