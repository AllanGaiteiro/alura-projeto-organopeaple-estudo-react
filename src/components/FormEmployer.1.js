import styled from "styled-components";
import { ButtonSubmit } from "./ButtonSubmit";
import { FormEmployerContainer } from "./FormEmployer";
import { Input } from "./Input";

export function FormEmployer(setSignSelected) {
  return (
    <FormEmployerContainer>
      <p>Preencha os dados para criar o card do colaborador.</p>
      <FormFieldInput
        name="Nome"
        placeholder="Digite o nome do empregado"
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        name="Cargo"
        placeholder="Digite seu cargo na empresa atual."
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        name="Imagen"
        placeholder="Adcione o Link da Imagem"
        type="text"
      ></FormFieldInput>

      <ButtonSubmit
        type="submit"
        onClick={() => setSignSelected(false)}
        value="Criar card"
      />
    </FormEmployerContainer>
  );
}

const FormFieldContainer = styled.div`
  text-align: start;
  margin: 0px 20px;
`;

function FormFieldInput({ name, placeholder, type }) {
  return (
    <FormFieldContainer>
      <p>{name}:</p>
      <Input
        placeholder={placeholder || "digite um valor."}
        type={type || "text"}
      />
    </FormFieldContainer>
  );
}
