import styled from "styled-components";

export const LineTextHeader = styled.hr`
  border: none;
  height: 4px;
  background-color: ${(props) => props.color || "black"};
  width: 64px;
  margin-bottom: 40px;
`;
