import styled from "styled-components";

export const Input = styled.input`
  height: 80px;
  width: 930px;
  left: 255px;
  top: 1193px;
  border: none;
  border-radius: 0px;

  mix-blend-mode: normal;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border-radius: 0px;
  margin-bottom: 25px;
  padding-left: 20px;
  ::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    color: #6b6b6b;
    margin-left: 10px;
  }

  &:focus,
  &:hover {
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
    background-color: #f6f6f6;
    border-color: #d9d9d9;
  }

  /* Modifica o estilo do texto digitado */
  font-size: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: #444444;
`;
