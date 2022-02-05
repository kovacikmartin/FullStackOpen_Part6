import anecdoteService from '../services/anecdotes'

export const addVote = id => {

  return async dispatch => {

    await anecdoteService.addVote(id)

    dispatch({

      type: 'ADD_VOTE',
      id: id
    })
  }
}

export const addAnecdote = anecdote => {

    return async dispatch => {

      const newAnecdote = await anecdoteService.create(anecdote)

      dispatch({

        type: 'ADD_ANECDOTE',
        anecdote: newAnecdote
      })
    }
}

export const initializeAnecdotes = () => {

  return async dispatch => {

    const anecdotes = await anecdoteService.getAll()

    dispatch({
      
      type: 'INIT_ANECDOTES',
      anecdotes: anecdotes
    })
  }
}

const reducer = (state = [], action) => {

  switch (action.type) {

    case 'ADD_VOTE': {

      const id = action.id

      const anecdoteToChange = state.find(anectode => anectode.id === id)

      const changedAnecdote = {

        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
    }

    case 'ADD_ANECDOTE': {

      return state.concat(action.anecdote)
    }

    case 'INIT_ANECDOTES': {

      return action.anecdotes
    }

    default:
      return state
  }
}

export default reducer