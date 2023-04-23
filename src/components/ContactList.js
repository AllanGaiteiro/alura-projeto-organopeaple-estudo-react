import imageFacebook from "../images/fb.png";
import imageInstagram from "../images/ig.png";
import imageTwiter from "../images/tw.png";
import { ConstactContainer } from "./ConstactContainer";

export function ContactList() {
  return (
    <ConstactContainer>
      <li>
        <img src={imageFacebook} alt="imagem " />
      </li>
      <li>
        <img src={imageTwiter} alt="imagem " />
      </li>
      <li>
        <img src={imageInstagram} alt="imagem " />
      </li>
    </ConstactContainer>
  );
}
