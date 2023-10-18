import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-8
      rounded-xl mb-5
      '>Tailwind test</h1>

      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      >
        <Cards class="mr-10"
          username="Rajdeep Chowdhury"
          btnText="About me"
        />
        <Cards
          username="Piyali Chowdhury"
        />
        <Cards
          username="Piyali Chowdhury"
        />
        <Cards
          username="Piyali Chowdhury"
        />
        <Cards
          username="Piyali Chowdhury"
        />
        <Cards
          username="Piyali Chowdhury"
        />
        <Cards
          username="Piyali Chowdhury"
        />
      </div>
        
      
      
    </>
  )
}

export default App
