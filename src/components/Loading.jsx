import './Loading.css'

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="loading-text pulse">Buscando perfil...</p>
    </div>
  )
}

export default Loading