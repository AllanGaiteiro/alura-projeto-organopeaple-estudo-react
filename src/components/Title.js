import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Prata";
  font-style: normal;
  font-weight: 400;
  font-size: ${(prop) => prop.fontSize || "32px"};
  align-items: center;
  text-align: center;
  color: ${(prop) => prop.color || "#212121"};
`;
