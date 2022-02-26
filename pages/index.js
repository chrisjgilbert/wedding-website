import HeroImage from "../components/heroImage";
import Container from "../components/container";
import ListContainer from "../components/listContainer";
import ListContainerItem from "../components/listContainerItem";
import SummaryItem from "../components/summaryItem";

import styles from "../styles/Home.module.css";

import topics from "../content/topics";

export default function Home() {
  return (
    <>
      <HeroImage image="/homepage.jpg" />
      <Container>
        <div className={styles.copyContainer}>
          <p>We can‘t wait to welcome you to Provence for our wedding.</p>
          <p>
            We thought it might be helpful to share some our our favourite
            places to visit and see while you are staying in the Luberon.
          </p>
        </div>
        <ListContainer>
          {topics.map((topic) => (
            <ListContainerItem key={topic.title}>
              <SummaryItem {...topic} />
            </ListContainerItem>
          ))}
        </ListContainer>
      </Container>
    </>
  );
}
