import Image from "next/image";

import styles from "../styles/components/HeroImage.module.css";

export default function HeroImage({ image }) {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        layout="responsive"
        width={1077}
        height={585}
        alt="Provence"
        objectFit="cover"
      />
    </div>
  );
}
