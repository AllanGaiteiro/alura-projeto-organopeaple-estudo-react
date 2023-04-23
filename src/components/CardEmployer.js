import styled from "styled-components";

export const CardEmployer = styled.div`
  height: 270px;
  max-width: 262px;
  margin: 0px 12px;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    #ffffff 0,
    #ffffff 70%,
    ${(props) => props.cardCollor || "black"} 30%
  );
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    /* Muda a sombra da caixa (box-shadow) quando o mouse passa sobre ele */
    box-shadow: 7px 7px 25px rgba(0, 0, 0, 0.2);
  }
`;
