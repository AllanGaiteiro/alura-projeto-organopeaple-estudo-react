import styled from "styled-components";

export const SidebarButton = styled.a`
  display: block;
  margin: 10px auto;
  width: 50px;
  height: 50px;
  font-size: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "#eee"};
  color: ${(props) => props.color || "#555"};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.backgroundColorHover || "#ddd"};
    color: white;

    transform: scale(1.1) translateX(10px);
  }
  i {
    margin: 15px;
  }
`;
