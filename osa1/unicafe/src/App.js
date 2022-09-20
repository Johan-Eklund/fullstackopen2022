import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + bad * -1) / all;
  const positive = (good / all) * 100;
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given yet</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => setGood(good + 1);
  const neutralClick = () => setNeutral(neutral + 1);
  const badClick = () => setBad(bad + 1);

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
