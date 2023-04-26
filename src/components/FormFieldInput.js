import { FormFieldContainer } from "./FormFieldContainer";
import { FormFieldName } from "./FormFieldName";
import { Input } from "./Input";

export function FormFieldInput(props) {
  return (
    <FormFieldContainer>
      <FormFieldName>{props.labelName}</FormFieldName>
      <Input
        name={props.formName}
        value={props.formValues[props.formName]}
        onChange={props.onChange}
        placeholder={props.placeholder || "digite um valor."}
        type={props.type || "text"}
      />
    </FormFieldContainer>
  );
}
