import { CardEmployer } from "./CardEmployer";
import { CardList } from "./CardList";
import { SectionContainer } from "./SectionContainer";
import { Title } from "./Title";

export function Section({ section }) {
  const { backgroundColor, title, cardCollor } = section;
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <CardList>
        <CardEmployer cardCollor={cardCollor}></CardEmployer>
        <CardEmployer cardCollor={cardCollor}></CardEmployer>
        <CardEmployer cardCollor={cardCollor}></CardEmployer>
      </CardList>
    </SectionContainer>
  );
}
