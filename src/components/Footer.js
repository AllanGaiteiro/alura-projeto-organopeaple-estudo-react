import imageFundo from "../images/fundo.png";
import imageLogo from "../images/logo.png";
import { ContactList } from "./ContactList";
import { CreatedBy } from "./CreatedBy";
import { FooterContainer } from "./FooterContainer";
import { ImageLogo } from "./ImageLogo";

export function Footer() {
  return (
    <FooterContainer image={imageFundo}>
      <ContactList />
      <ImageLogo src={imageLogo} alt="imagem " />
      <CreatedBy>Desenvolvido por Allan</CreatedBy>
    </FooterContainer>
  );
}
