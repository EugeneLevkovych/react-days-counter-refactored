export default function Step({ step, setStep }) {
 
 
 
  return (
    <div>
     <input onChange={(e) => setStep(Number(e.target.value))} type="range" min={1} max={10} value={step} />
      <span>Step: {step}</span>
     
    </div>
  );
}
