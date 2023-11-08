import { useState } from "react";
import Button from "./Components/Button";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"Good"} onClick={() => setGood((curr) => curr + 1)} />
      <Button text={"Neutral"} onClick={() => setNeutral((curr) => curr + 1)} />
      <Button text={"Bad"} onClick={() => setBad((curr) => curr + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
