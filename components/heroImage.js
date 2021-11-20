import Image from 'next/image'

import styles from "../styles/components/HeroImage.module.css"

export default function HeroImage() {
	return (
		<div className={styles.container}>
			<Image src="/hero-image-wip.jpeg"
				layout="intrinsic"
				width={1080}
				height={500}
				alt="Provence"
				objectFit="cover" />
		</div>
	)
}
