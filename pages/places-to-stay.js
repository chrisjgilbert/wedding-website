import Container from "../components/container";
import HeroImage from "../components/heroImage";
import ListContainer from "../components/listContainer";
import ListContainerItem from "../components/listContainerItem";
import PageHeader from "../components/pageHeader";
import Recommendation from "../components/recommendation";

import content from "../content/places_to_stay";

export default function PlacesToVisit() {
  return (
    <>
      <HeroImage />
      <Container>
        <PageHeader
          span="Places to stay"
          h1="Hotels, Villas and B&B’s we love"
          p="There are many beautiful hotels and B&B’s to stay in across Provence. Below are some of the ones we love located near to La Bastide de Marie. We would also highly recommend looking at farmhouses or a Gîte to rent if you are planning on extending out your trip."
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
