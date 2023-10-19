import React, { useState } from 'react';

const Button = ({handleClick, text}) =>{
  return (
    <>
    <button onClick = {handleClick}>{text}</button>
    </>
  ); 
}
const ShowVotes = ({votes}) =>{
  return (
  <p>has {votes} votes </p>
  )
}

const MostVoted = ({anecdote, votes}) => {
  return (
    <>
    <p>{anecdote}</p>
    <ShowVotes votes= {votes}  />
    </>
  )

}


function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( new Uint8Array(anecdotes.length))

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random()* anecdotes.length)
    setSelected(randomIndex)
  }
  const voteClick = () => {

    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes)
      
  }

  const mostVotes = Math.max(...votes);
  const anecdoteWithMostVotes = anecdotes[votes.indexOf(mostVotes)];

  return (
    <div>

<h1>Anecdote of the day</h1>

   {anecdotes[selected]}
   <ShowVotes votes={votes[selected]} />
   <br/>
   <Button handleClick={voteClick} text="vote" />
  <Button handleClick= {nextAnecdote} text = "next anecdote" />

  <h1>Anecdote with most votes</h1>
  <MostVoted anecdote= {anecdoteWithMostVotes} votes={mostVotes}/>
  
    </div>
  )

}
export default App
