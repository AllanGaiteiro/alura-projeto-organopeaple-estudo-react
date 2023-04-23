import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 0px 160px;
  background-color: #6278f7;
  background-image: ${(props) => "url(" + props.image + ")"};
  background-size: cover;
  background-position: center;
`;
