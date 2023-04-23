import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { profileList } from "../db/profileList";
import { CardCarousel } from "./CardCarousel";
import { HeaderSection } from "./HeaderSection";
import { SectionContainer } from "./SectionContainer";

export function Section({ section }) {
  const [employers, setEmployers] = useState([]);
  const { brightColor, title, color, id } = section;

  useEffect(() => {
    setEmployers(profileList.filter((p) => p.section === id));
  }, []);

  return (
    <SectionContainer id={id} backgroundColor={brightColor}>
      <HeaderSection title={title}></HeaderSection>
      {employers.length > 0 && (
        <CardCarousel cardCollor={color} employers={employers} />
      )}
    </SectionContainer>
  );
}
