import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

    const dispatch = useDispatch()

    const anecdotes = useSelector(({anecdotes, filter}) => {

        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })

    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
  
    const vote = (id) => {
  
        dispatch(addVote(id))

        const anecdote = anecdotes.find(anecdote => anecdote.id === id)
        const notification = `You voted for: "${anecdote.content}"`

        dispatch(showNotification(notification))
        setTimeout(() => dispatch(hideNotification()), 5000)
    }

    return(

        <div>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList