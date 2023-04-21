import { sectionsList } from "../db/sectionsList";
import { Section } from "./Section";

export function Sections() {
  return (
    <div>
      {sectionsList.map(({ backgroundColor, title }) => (
        <Section title={title} backgroundColor={backgroundColor} />
      ))}
    </div>
  );
}
