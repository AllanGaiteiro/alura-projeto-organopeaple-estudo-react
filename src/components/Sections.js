import { sectionsList } from "../db/sectionsList";
import { Section } from "./Section";

export function Sections() {
  return (
    <div>
      {sectionsList.map((section) => (
        <Section section={section} />
      ))}
    </div>
  );
}
