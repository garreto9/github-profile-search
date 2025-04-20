import './ProfileCard.css'

function ProfileCard({ user }) {
  return (
    <div className="profile-card fade-in">
      <div className="card-inner">
        <div className="profile-header">
          <div className="avatar-container">
            <img 
              src={user.avatar_url} 
              alt={`${user.name || user.login}'s avatar`} 
              className="profile-avatar" 
            />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name || user.login}</h2>
            <a href={user.html_url} className="profile-username" target="_blank" rel="noopener">
              @{user.login}
            </a>
          </div>
        </div>
        
        <div className="profile-bio">
          {user.bio ? (
            <p>{user.bio}</p>
          ) : (
            <p className="no-bio">Este usuário não possui uma bio.</p>
          )}
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.followers}</span>
            <span className="stat-label">Seguidores</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.following}</span>
            <span className="stat-label">Seguindo</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.public_repos}</span>
            <span className="stat-label">Repositórios</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard