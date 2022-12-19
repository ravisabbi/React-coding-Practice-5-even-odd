// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  increseCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => {
      const {count} = prevState
      const newValue = count + randomNumber
      const newType = newValue % 2 === 0 ? 'Even' : 'Odd'
      return {count: newValue, type: newType}
    })
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="count">Count {count}</h1>
          <p className="count-type">Count is {type}</p>
          <button
            className="increment-btn"
            type="button"
            onClick={this.increseCount}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
