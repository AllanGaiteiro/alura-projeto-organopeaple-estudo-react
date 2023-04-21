import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 1440px;
  height: 438px;
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: 34px;
  margin: 0px auto;
`;
