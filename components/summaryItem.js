import Image from "next/image";

import Tag from "./tag";
import Hr from "./hr";

import styles from "../styles/components/SummaryItem.module.css";

export default function SummaryItem({ topic, title, copy, image, link }) {
  const innerContent = () => {
    return (
      <>
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
          <Tag text={topic} />
          <h2>{title}</h2>
          <Hr />
          <p>{copy}</p>
        </div>
      </>
    );
  };

  const content = () => {
    if (link) {
      return <a href={link}>{innerContent()}</a>;
    } else {
      return <div>{innerContent()}</div>;
    }
  };

  return content();
}
