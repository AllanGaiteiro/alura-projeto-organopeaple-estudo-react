import { useState } from "react";
import { FormEmployer } from "./FormEmployer.1";
import { SectionSignedEmployer } from "./SectionSignedEmployer";
import { SignEmployer } from "./SignEmployer";

export function SectionSignEmployers() {
  const [signSelected, setSignSelected] = useState(false);
  return (
    <SectionSignedEmployer>
      {!signSelected && <SignEmployer setSignSelected={setSignSelected} />}
      {signSelected && <FormEmployer setSignSelected={setSignSelected} />}
    </SectionSignedEmployer>
  );
}
