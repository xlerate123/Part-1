import { useState } from 'react';
import './App.css';

const Button = ({handleClick,text}) =>{
  return(
 <button onClick={handleClick}>{text}</button>)
}   

const StatisticLine = ({text,value}) => {
return(

    <tr><td>{text}</td>
    <td>{value}</td></tr>


)
}

const Statistics = ({good,neutral,bad,allClicks,average,pos}) =>{ 
  if(allClicks!==0){
    return(
      
      <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={allClicks} />
      <StatisticLine text="Average" value = {average} />
      <StatisticLine text="Positive" value={pos} />
      </tbody>
      </table>
     </div>
      
    )
  }
  else{
    return(
      <p>No feedback given</p>
    )
  }
  
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () =>{
    setAll(allClicks+1)
    setGood(good+1)
   }
 
  const handleNeutralClick = () =>{
     setAll(allClicks+1)
     setNeutral(neutral+1)
    }
 
  const handleBadClick = () =>{
     setAll(allClicks+1)
     setBad(bad+1)
    }

  const average = allClicks/3;
  const pos = (good/allClicks) * 100
  
return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick}text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} average={average} pos={pos} />
    </div>
  )
}


export default App;
