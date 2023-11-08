import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue + "%";
  }

  return (
    <div>
      <h2>stats</h2>
      {good + neutral + bad > 0 ? (
        <table>
          <tbody>
            <StatisticLine name={"Good"} value={good} />
            <StatisticLine name={"Neutral"} value={neutral} />
            <StatisticLine name={"Bad"} value={bad} />
            <StatisticLine name={"All"} value={good + neutral + bad} />
            <StatisticLine
              name={"Average"}
              value={(good - bad) / (good + neutral + bad)}
            />
            <StatisticLine
              name={"Positive"}
              value={percentage(good, good + neutral + bad)}
            />
          </tbody>
        </table>
      ) : (
        <p>No feeback given</p>
      )}
    </div>
  );
}
