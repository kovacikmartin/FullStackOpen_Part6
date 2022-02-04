import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const add = (event) => {

        event.preventDefault()
    
        const anecdote = event.target.anecdote.value
        dispatch(addAnecdote(anecdote))
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