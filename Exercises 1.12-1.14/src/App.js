import { useState } from 'react';
import './App.css';

const Button = ({handleClick,text}) =>{
  return(
 <button onClick={handleClick}>{text}</button>)
}   

const Maxvotes = ({votes,anecdotes}) => {
  let max = 0
  let maxindex = 0

  for(let i=0;i<=votes.length;i++){
    

   if(votes[i]>max){
      max = votes[i]
      maxindex = i
    }
 
  }

  if(max === 0){
    return(
      <p>No Votes yet</p>
    )
  }


  const top = anecdotes[maxindex]
  
  return(
    <div>
       <h1>Anecdote with most votes</h1>
       <p>{top}</p>
       <p>has {max} votes</p>
    </div>
  )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setvotes] = useState(new Array(anecdotes.length).fill(0))

  const updatevote = () => {
    const copy = [...votes]
    copy[selected] += 1 
    setvotes(copy)
  }

  const next = () => {
    const newval = (Math.floor(Math.random() * 8));
    setSelected(newval)
  }


 return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={next} text="next anecdote" />
  
      <Button handleClick={updatevote} text="vote" />
      
      <Maxvotes votes={votes} anecdotes={anecdotes} />

    </div>
  )
}

export default App;
