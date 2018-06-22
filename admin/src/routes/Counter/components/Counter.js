import React from 'react'
import PropTypes from 'prop-types'

const getUser = async () => {
   console.log('click')
  const user = await fetch('/api/users')

  console.log(user)
}

export const Counter = ({counter, increment, doubleAsync}) => (
  <div style={{margin: '0 auto'}}>
    <h2>Counter: {counter}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
    <button className='btn btn-secondary' onClick={getUser}>
      user
    </button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
