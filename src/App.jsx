import { useState } from 'react'
import Header from "./components/Header"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Dashboard Header" />
      <div style={{ padding: 20 }}  >
        <h1>React Dashboard</h1>
        <Counter count={count} />
        <button onClick={() => setCount(count + 1)}>Increament</button>
      </div>

    </>
  )
}

export default App
