import styled from "styled-components";

export const CardEmployer = styled.div`
  height: 269.3266906738281px;
  width: 262px;
  margin: 0px 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    #ffffff 0,
    #ffffff 70%,
    ${(props) => props.cardCollor || "black"} 30%
  );
`;
