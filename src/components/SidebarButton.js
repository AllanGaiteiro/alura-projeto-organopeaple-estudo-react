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
  &:hover {
    background-color: ${(props) => props.backgroundColorHover || "#ddd"};
    color: white;
  }
  i {
    margin: 15px;
  }
`;
