import React, { useContext } from 'react'
import { Providing } from './Provider'
function Counter() {
    const {count,increment,decrement} = useContext(Providing)
  return (
      <div>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter