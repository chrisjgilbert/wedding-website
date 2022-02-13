import Container from "../components/container";
import HeroImage from "../components/heroImage";
import ListContainer from "../components/listContainer";
import ListContainerItem from "../components/listContainerItem";
import PageHeader from "../components/pageHeader";
import Recommendation from "../components/recommendation";

import content from "../content/places_to_eat";

export default function PlacesToEat() {
  return (
    <>
      <HeroImage image="/food.jpg" />
      <Container>
        <PageHeader
          span="Places to eat and drink"
          h1="The Best Food, Restaurants, Cafes & Rosé Pit-Stops"
          p="Arguably the thing we love the most about this region of France is the food and wine it produces. There are so many amazing places to pick up great wine or try delicious seasonal staples but below are some of the places we love the most."
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
