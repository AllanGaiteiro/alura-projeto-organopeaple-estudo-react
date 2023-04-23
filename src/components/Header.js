import Banner from "../images/banner.png";
import { HeaderImage } from "./HeaderImage";

export function Header() {
  return (
    <header>
      <HeaderImage src={Banner} alt="banner" />
    </header>
  );
}
