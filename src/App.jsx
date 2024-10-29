import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    setCount(count + 1)
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-7 rounded-xl text-sky-500' >Talwind test</h1>
    
<Card name="Sharmeen" designation = "senior artist"/>
<Card name="Hira" designation = "senior artist"/>

<button
onClick={addvalue}
> {count}</button>
    
    </>
  )
}

export default App
