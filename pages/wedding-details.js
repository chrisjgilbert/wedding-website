import Container from "../components/container";
import HeroImage from "../components/heroImage";
import ListContainer from "../components/listContainer";
import ListContainerItem from "../components/listContainerItem";
import PageHeader from "../components/pageHeader";
import SummaryItem from "../components/summaryItem";
import OnTheDay from "../components/OnTheDay";

import { content } from "../content/wedding_details";

export default function WeddingDetails() {
  return (
    <>
      <HeroImage image="/on_the_day.jpg" />
      <Container>
        <PageHeader
          span="Information on the wedding"
          h1="Wedding details"
          p="Some helpful information about the wedding itself"
        />
        <ListContainer>
          {content.map((content) => (
            <ListContainerItem key={content.title}>
              <SummaryItem {...content} />
            </ListContainerItem>
          ))}
        </ListContainer>
        <OnTheDay />
      </Container>
      <HeroImage image="/bastide_c.png" />
    </>
  );
}
