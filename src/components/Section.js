import { SectionContainer } from "./SectionContainer";
import { Title } from "./Title";

export function Section({ backgroundColor, title }) {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Title>{title}</Title>
    </SectionContainer>
  );
}
