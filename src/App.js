import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import Form from "./Components/1Form";
import Campaign from "./Components/2Campaign"; 
import Payment from "./Components/4Payment";
import OutlinedCard from "./Components/3slide"
import Final from "./Components/5final"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@material-ui/core";


function App() {
  
  const [userData,setUserData] = useState({});
  const [currentStep, setStep] = useState(1);
  console.log(userData)

  function showStep(step) {
    
    let commonProps = {
      userData, setUserData, currentStep, setStep
    }

    switch (step) {
      case 1:
        return <Form {...commonProps} />;
      case 2:
        return <Campaign {...commonProps} />;
      case 3:
        return <OutlinedCard {...commonProps} />;
      case 4:
        return <Payment {...commonProps} />
      case 5:
        return <Final {...commonProps} />
       default: 
    }
  }
  return (
    <>
<div className="App container mt-5">
                <header className="App-header">
                    <div className="center-stepper">
                        <Stepper activeStep={currentStep - 1} orientation="horizontal">
                            <Step>
                                <StepLabel>Business Details</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Campaign Details</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Targets & Budgets</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Delivery & Payment</StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                    {showStep(currentStep)}
                </header>

            </div>
    </>
  );
}

export default App;