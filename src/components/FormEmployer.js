import { useEffect, useState } from "react";
import { sectionsList } from "../db/sectionsList";
import { ButtonSubmit } from "./ButtonSubmit";
import { DescriptionForm } from "./DescriptionForm";
import { FormEmployerContainer } from "./FormEmployerContainer";
import { FormFieldInput } from "./FormFieldInput";
import { Select } from "./Select";

export function FormEmployer({ setSignSelected }) {
  const [formValues, setFormValues] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(sectionsList || []);
  }, []);

  const handleChangeValues = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormValues((current) => {
      console.log({
        ...current,
        [fieldName]: fieldValue,
      });
      return {
        ...current,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <FormEmployerContainer>
      <DescriptionForm>
        Preencha os dados para criar o card do colaborador.
      </DescriptionForm>
      <FormFieldInput
        LabelName="Nome"
        formName="name"
        formValues={formValues}
        onChange={handleChangeValues}
        placeholder="Digite o nome do empregado"
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        LabelName="Cargo"
        formName="cargo"
        formValues={formValues}
        onChange={handleChangeValues}
        placeholder="Digite seu cargo na empresa atual."
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        LabelName="Imagen"
        formName="image"
        formValues={formValues}
        onChange={handleChangeValues}
        placeholder="Adcione o Link da Imagem"
        type="text"
      ></FormFieldInput>

      <Select
        LabelName="Times"
        formName="section"
        formValues={formValues}
        options={options}
        onChange={handleChangeValues}
      ></Select>

      <ButtonSubmit
        type="submit"
        onClick={() => setSignSelected(false)}
        value="Criar card"
      />
    </FormEmployerContainer>
  );
}
