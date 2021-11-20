import HeroImage from '../components/heroImage'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroImage />
      <div className={styles.summaryContainer}>
        <p>We can‘t wait to welcome you to Provence for our wedding,
          it really is such a special part of the world.
          We thought it might be helpful to share some our our favourite
          places to visit and see while you are stating in the Luberon.</p>
      </div>
    </div >
  )
}
