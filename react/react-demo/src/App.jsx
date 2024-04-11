import { useState } from 'react'
import './App.css'
import WrapperRouters from './router/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WrapperRouters></WrapperRouters>
    </>
  )
}

export default App
