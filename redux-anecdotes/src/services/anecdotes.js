import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {

    const response = await axios.get(baseUrl)

    return response.data
}

const create = async (anecdote) => {

    const anecdoteObject = {

        content: anecdote,
        votes: 0
    }

    const response = await axios.post(baseUrl, anecdoteObject)

    return response.data
}

const addVote = async (id) => {

    const anecdotes = await getAll()
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)

    const response = await axios.patch(`${baseUrl}/${id}`, { votes: anecdote.votes + 1 })

    return response.data
}

export default { getAll, create, addVote }