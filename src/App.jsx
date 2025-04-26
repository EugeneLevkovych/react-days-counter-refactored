import { useState } from "react";
import Step from "./components/Step";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Step step={step} setStep={setStep} />
      <Counter count={count} setCount={setCount} step={step} setStep={setStep}/>
    </div>
  );
}
