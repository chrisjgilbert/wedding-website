import Container from "../components/container";
import HeroImage from "../components/heroImage";
import ListContainer from "../components/listContainer";
import ListContainerItem from "../components/listContainerItem";
import PageHeader from "../components/pageHeader";
import Recommendation from "../components/recommendation";

import content from "../content/other_activities";

export default function OtherActivities() {
  return (
    <>
      <HeroImage />
      <Container>
        <PageHeader
          span="Other things to do while you are in the Luberon"
          h1="Other Activicties to keep you busy"
          p="Some of our favourite things to do in Provence when not by the pool enjoying the sunshine."
        />
        <ListContainer>
          {content.map((c) => (
            <ListContainerItem key={c.title}>
              <Recommendation {...c} />
            </ListContainerItem>
          ))}
        </ListContainer>
      </Container>
    </>
  );
}
