import { useState } from 'react'

const Button = ({ onClick, text }) => {
  // Button
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  // Form a statistic line
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  // Combine statistics from unicafe feedback
  const sum = good - bad
  const average = sum/total
  const positive = good/total

  return (
    <div>
      <table>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={total} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allFB = good + neutral + bad

  // Conditional rendering when there is not feedback given yet
  if (allFB === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text={'Good'} />
        <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
        <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={allFB}/>
    </div>
  )
}

export default App
