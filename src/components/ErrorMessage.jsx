import './ErrorMessage.css'

function ErrorMessage({ message }) {
  const messageLines = message.split('\n')
  
  return (
    <div className="error-container slide-in">
      {messageLines.map((line, index) => (
        <p key={index} className="error-text">{line}</p>
      ))}
    </div>
  )
}

export default ErrorMessage