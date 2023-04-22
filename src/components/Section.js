import { profileList } from "../db/profileList";
import ProfyleImage from "../images/empregado.jpg";
import { CardEmployer } from "./CardEmployer";
import { CardList } from "./CardList";
import { ProfileImage } from "./ProfileImage";
import { SectionContainer } from "./SectionContainer";
import { Title } from "./Title";

export function Section({ section }) {
  const { brightColor, title, color, id } = section;
  return (
    <SectionContainer backgroundColor={brightColor}>
      <Title>{title}</Title>
      <CardList>
        {profileList
          .filter((p) => p.section === id)
          .map((p, i) => (
            <CardEmployer key={i} cardCollor={color}>
              <ProfileImage src={ProfyleImage} />
              <h2>{p.name}</h2>
              <p>{p.jobTitle}</p>
            </CardEmployer>
          ))}
      </CardList>
    </SectionContainer>
  );
}
