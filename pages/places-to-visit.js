import Container from "../components/container";
import HeroImage from "../components/heroImage";
import ListContainer from "../components/listContainer";
import PageHeader from "../components/pageHeader";
import Recommendation from "../components/recommendation";

import content from "../content/villages_and_towns";

export default function PlacesToVisit() {
  return (
    <>
      <HeroImage />
      <Container>
        <PageHeader
          span="Places to visit "
          h1="Our favourite villages and towns in Provence"
          p="Provence is famous for its beautiful hillside villages which are extremely picturesque and oozing with charm. From the quintessential Ménerbes to lazy long afternoons spent in Gordes here is a list of some of our favourite places to visit."
        />
        <ListContainer>
          {content.map((c) => (
            <Recommendation key={c.title} {...c} />
          ))}
        </ListContainer>
      </Container>
    </>
  );
}
