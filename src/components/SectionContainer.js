import styled from "styled-components";

export const SectionContainer = styled.section`
  height: 438px;
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: 34px;
  margin: 0px auto;
  @media only screen and (max-width: 900px) {
    padding: 0px;
  }
`;
