import Image from 'next/image'

import styles from "../styles/components/heroImage.module.css"

export default function HeroImage() {
    return (
        <div className={styles.container}>
            <Image src="/hero-image-wip.jpeg" layout="fixed" height={336} width={625} alt="Provence" />
        </div >
    )
}
