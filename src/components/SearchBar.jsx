import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, disabled }) {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(username)
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={disabled}
          aria-label="Username"
        />
        <button 
          className="btn btn-primary search-button" 
          type="submit"
          disabled={disabled || !username.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar