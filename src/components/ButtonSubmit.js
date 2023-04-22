import styled from "styled-components";

export const ButtonSubmit = styled.input`
  height: 80px;
  width: 167px;
  border-radius: 10px;
  background: #6278f7;
  mix-blend-mode: normal;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  border-color: white;
  &:hover {
    cursor: pointer;
    background-color: #4652c7;
    transition: background-color 0.3s ease-in-out;
  }
  &:active {
    transform: translateY(1px);
    box-shadow: none;
    background-color: #4c5ddd;
  }
`;
