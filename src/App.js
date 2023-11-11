import { useState } from "react";
import { ControlledForms } from "./ControlledForm";
import { Uncontrolledform } from "./UncontrolledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";

function App() {

  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
    <>
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={()=>setShouldShowModal(false)} >
          <h1>Hello</h1>
        </ControlledModal>
      <button onClick={()=>setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? "Hide Modal" : "Show Modal"}</button>
    </>
  )
}

export default App;
