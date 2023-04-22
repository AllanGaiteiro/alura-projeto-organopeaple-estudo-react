import styled from "styled-components";
import BtnImage from "../images/btn.png";
import { HeaderSection } from "./HeaderSection";
import { SignEmployerContainer } from "./SignEmployerContainer";

const ButtonImage = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  right: 0px;
  top: 0px;
  border-radius: 0px;
`;

export function SignEmployer({ setSignSelected }) {
  return (
    <SignEmployerContainer>
      <HeaderSection
        title="Minha Organização:"
        fontSize="40px"
        color="#6278F7"
      ></HeaderSection>
      <ButtonImage
        src={BtnImage}
        alt="imagen"
        onClick={() => setSignSelected(true)}
      />
    </SignEmployerContainer>
  );
}
