import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (<tbody><tr><td>{text}</td><td>{value}</td></tr></tbody>)

const Statistics = ({good, neutral, bad}) => {
  const all = (good + neutral + bad)
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
        <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
        </table>
    )
  }
}

const HandleGoodClick = ({good, setGood}) => {
  setGood(good + 1)
}

const HandleNeutralClick = ({neutral, setNeutral}) => {
  setNeutral(neutral + 1)
}

const HandleBadClick = ({bad, setBad}) => {
  setBad(bad + 1)
}

const App = () => {
  // Tallenna napit omaan tilaansa
  const [good, setGood ] = useState(0)
  const [neutral, setNeutral ] = useState(0)
  const [bad, setBad ] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={() => HandleGoodClick({good, setGood})} text="good" />
        <Button  handleClick={() => HandleNeutralClick({neutral, setNeutral})} text="neutral"/>
        <Button  handleClick={() => HandleBadClick({bad, setBad})} text="bad"/>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

export default App

