import BtnImage from "../images/btn.png";
import { SignEmployerContainer } from "./SignEmployerContainer";
import { Title } from "./Title";

export function SignEmployer({ setSignSelected }) {
  return (
    <SignEmployerContainer>
      <Title fontSize="40px" color="#6278F7">
        Minha Organização:
      </Title>

      <img src={BtnImage} alt="" onClick={() => setSignSelected(true)} />
    </SignEmployerContainer>
  );
}
