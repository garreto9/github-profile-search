import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import ErrorMessage from './components/ErrorMessage'
import Loading from './components/Loading'
import { searchUser } from './services/githubApi'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (username) => {
    if (!username.trim()) return

    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const userData = await searchUser(username)
      setUser(userData)
    } catch (err) {
      setError('Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container container py-5 fade-in">
      <Header />
      <SearchBar onSearch={handleSearch} disabled={loading} />
      
      <div className="content-area mt-4">
        {loading && <Loading />}
        {error && !loading && <ErrorMessage message={error} />}
        {user && !loading && <ProfileCard user={user} />}
      </div>
    </div>
  )
}

export default App