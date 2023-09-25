import { useState, createContext, useReducer } from 'react'
import './App.css'
import Button from './component/Button'

export const SomeContext = createContext()

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return state + 1
    
  }
  if (action.type === 'reduce_age') {
    return state - 1
    
  }
  throw Error('Unknown action.')
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <SomeContext.Provider
        value={{
          count,
          setCount,
        }}
      >
        <Button />
        <button onClick={() => dispatch({ type: 'incremented_age' })}>
          ButtonReducer {state}
        </button>
        <button onClick={() => dispatch({ type: 'reduce_age' })}>
          Reduce ButtonReducer {state}
        </button>
      </SomeContext.Provider>
    </>
  )
}

export default App
