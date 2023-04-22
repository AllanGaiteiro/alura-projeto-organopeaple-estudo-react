import { sectionsList } from "../db/sectionsList";
import { Section } from "./Section";

export function Sections() {
  return (
    <div>
      {sectionsList.map(
        (section) =>
          section.id !== "cadastro" && (
            <Section key={section.id} section={section} />
          )
      )}
    </div>
  );
}
