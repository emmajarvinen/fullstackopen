import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ stat, number }) => {
  return (
      <tr>
          <td>{stat}</td>
          <td>{number}</td>
      </tr>
  )
}

const Statistics = ({goods, bads, neutrals, allClicks}) => {
  if (allClicks === 0) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine
          stat = {'good'} number = {goods}/>
        <StatisticLine
          stat = {'neutral'} number = {neutrals}/>
        <StatisticLine 
          stat = {'bad'} number = {bads}/>
        <StatisticLine 
          stat = {'all'} number = {allClicks}/>
        <StatisticLine 
          stat = {'average'} number = {(goods - bads) / allClicks}/>
        <StatisticLine 
          stat = {'positive'} number = {(goods / allClicks) * 100 + '%'}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div>
      <h1>Statistics</h1>
      <Statistics  goods = {good} neutrals = {neutral}
                     bads = {bad} allClicks = {all}/>
    </div>    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


