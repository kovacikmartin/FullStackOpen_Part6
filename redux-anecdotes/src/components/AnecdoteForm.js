import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const add = async (event) => {

        event.preventDefault()
    
        const anecdote = event.target.anecdote.value

        dispatch(addAnecdote(anecdote))

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