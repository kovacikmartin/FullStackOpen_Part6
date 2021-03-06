import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const add = async (event) => {

        event.preventDefault()
    
        const anecdote = event.target.anecdote.value

        props.addAnecdote(anecdote)

        const notification = `You created new anecdote: "${anecdote}"`
        
        props.showNotification(notification, 5000)
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

const mapDispatchToProps = {

    addAnecdote,
    showNotification,
    hideNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm