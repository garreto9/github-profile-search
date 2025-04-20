import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export const searchUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found')
    }
    throw new Error('Failed to fetch user data')
  }
}