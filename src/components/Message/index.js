// Write your code here
import './index.css'

const Message = props => {
  const {status} = props
  const msg = status ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{msg}</h1>
}

export default Message
