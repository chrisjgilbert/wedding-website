import Container from "../components/container";
import HeroImage from "../components/heroImage"
import ListContainer from "../components/listContainer"
import PageHeader from "../components/pageHeader"
import Recommendation from "../components/recommendation";

import content from "../content/villages_and_towns";

export default function PlacesToVisit() {
    return (
        <>
            <HeroImage />
            <Container>
                <PageHeader />
                <ListContainer>
                    {content.map(c => <Recommendation key={c.title} {...c} />)}
                </ListContainer>
            </Container>
        </>
    )
}
