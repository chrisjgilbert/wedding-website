import HeroImage from "../components/heroImage";
import Container from "../components/container";
import ListContainer from "../components/listContainer";
import SummaryItem from "../components/SummaryItem";

import styles from "../styles/Home.module.css";

import topics from "../content/topics";

export default function Home() {
  return (
    <>
      <HeroImage />
      <Container>
        <div className={styles.copyContainer}>
          <p>
            We can‘t wait to welcome you to Provence for our wedding, it really
            is such a special part of the world.
          </p>
          <p>
            We thought it might be helpful to share some our our favourite
            places to visit and see while you are stating in the Luberon.
          </p>
        </div>
        <ListContainer>
          {topics.map((topic) => (
            <SummaryItem key={topic.title} {...topic} />
          ))}
        </ListContainer>
      </Container>
    </>
  );
}
