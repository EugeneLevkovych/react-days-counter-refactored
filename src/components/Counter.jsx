export default function Counter({ count, setCount, step, setStep}) {
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
     setStep(1);
  }

  return (
    <div>
      <div className="counter-box">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input className="counter-input" type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days of today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 1 || count !== 0 ? (<div>
        <button onClick={handleReset}>Reset</button>
      </div>): null}
    </div>
  );
}
