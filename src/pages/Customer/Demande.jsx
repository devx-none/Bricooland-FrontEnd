import { useState } from "react";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import { UseContextProvider } from "../../contexts/StepperContext";

import Category from "../../components/steps/Category";
import Description from "../../components/steps/Description";
import Picture from "../../components/steps/Picture";
import Final from "../../components/steps/Final";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "",
    "",
    "",
    "",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Category />;
      case 2:
        return <Description />;
      case 3:
        return <Picture />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "suivant" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 py-20">
        <div className="mx-auto  rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
          {/* Stepper */}
          <div className="horizontal container  ">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10 ">
              <UseContextProvider>
                {displayStep(currentStep)}
              </UseContextProvider>
            </div>
          </div>

          {/* navigation button */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
