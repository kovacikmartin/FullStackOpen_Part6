import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const add = async (event) => {

        event.preventDefault()
    
        const anecdote = event.target.anecdote.value

        const newAnecdote = await anecdoteService.create(anecdote)

        dispatch(addAnecdote(newAnecdote))

        const notification = `You created new anecdote: "${anecdote}"`
        
        dispatch(showNotification(notification))
        setTimeout(() => dispatch(hideNotification()), 5000)
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm