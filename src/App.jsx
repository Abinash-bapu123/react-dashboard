import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>React Dashboard</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} style={{ marginLeft: 10 }}>Increament</button>
      </div>
    </>
  )
}

export default App
