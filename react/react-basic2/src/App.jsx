import { useState } from 'react'
import Counter from './components/counter.jsx'
import Input from './components/input.jsx'
import Input2 from './components/input2.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>hellow react</p>
      <div>
        <Counter></Counter>
        <Input></Input>
        <Input2></Input2>
      </div>

    </>
  )
}

export default App
