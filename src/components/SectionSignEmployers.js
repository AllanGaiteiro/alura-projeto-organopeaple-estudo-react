import { useState } from "react";
import { FormEmployer } from "./FormEmployer";
import { SectionSignedEmployerContainer } from "./SectionSignedEmployerContainer";
import { SignEmployer } from "./SignEmployer";

export function SectionSignEmployers() {
  const [signSelected, setSignSelected] = useState(false);
  return (
    <SectionSignedEmployerContainer>
      {!signSelected ? (
        <SignEmployer setSignSelected={setSignSelected} />
      ) : (
        <FormEmployer setSignSelected={setSignSelected} />
      )}
    </SectionSignedEmployerContainer>
  );
}
