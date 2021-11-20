import Image from "next/image"

import styles from "../styles/components/SummaryItem.module.css"

export default function SummaryItem({ topic, title, copy }) {
	return (
		<li className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/placeholder-1.jpg"
					layout="fill"
					alt={topic}
					objectFit="cover" />
			</div>
			<div className={styles.contentContainer}>
				<p>{topic}</p>
				<h2>{title}</h2>
				<hr />
				<p>{copy}</p>
			</div>
		</li>
	)
}
