import { useState } from "react";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ( { goToNext} ) =>  (
  <>
    <h1>Step1</h1>
    <button onClick={goToNext}>Next</button>
  </>
)

const StepTwo = ( { goToNext} ) =>  (
  <>
    <h1>Step2</h1>
    <button onClick={goToNext}>Next</button>
  </>
)

const StepThree = ( { goToNext} ) =>  (
  <>
    <h1>Step3</h1>
    <button onClick={goToNext}>Next</button>
  </>
)


function App() {

  return (
    <UncontrolledOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  )
}

export default App;
