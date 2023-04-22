import { LineTextHeader } from "./LineTextHeader";
import { Title } from "./Title";

export function HeaderSection({ fontSize, color, title }) {
  return (
    <header>
      <Title fontSize={fontSize} color={color}>
        {title}
      </Title>
      <LineTextHeader color={color} />
    </header>
  );
}
