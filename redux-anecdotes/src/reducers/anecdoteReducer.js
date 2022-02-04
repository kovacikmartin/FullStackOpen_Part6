const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const addVote = id => {

  return {

    type: 'ADD_VOTE',
    id: id
  }
}

export const addAnecdote = anecdote => {

    return {

      type: 'ADD_ANECDOTE',
      anecdote: anecdote
    }
}

export const initialAnecdotes = anecdotes => {

  return{

    type: 'INIT_ANECDOTES',
    anecdotes: anecdotes
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