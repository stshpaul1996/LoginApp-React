// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {status: false}

  loginStatus = () => {
    this.setStatus(preValue => ({status: !preValue.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-page">
        <div className="container">
          <Message status={status} />
          {status ? (
            <Logout logout={this.loginStatus} />
          ) : (
            <Login login={this.loginStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
