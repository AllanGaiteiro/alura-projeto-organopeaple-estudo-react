import { FormFieldContainer } from "./FormFieldContainer";
import { FormFieldName } from "./FormFieldName";
import { Input } from "./Input";

export function FormFieldInput({ name, placeholder, type }) {
  return (
    <FormFieldContainer>
      <FormFieldName>{name}</FormFieldName>
      <Input
        placeholder={placeholder || "digite um valor."}
        type={type || "text"}
      />
    </FormFieldContainer>
  );
}
