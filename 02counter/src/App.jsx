import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter] = useState(15)
    function addValue(){
      //console.log("value added "+counter);
      //counter=counter+1
      if(counter<20){
        counter++
        setCounter(counter)
        console.log(counter);
      }
    }
    function removeValue(){
      if(counter>0){
        counter--
        setCounter(counter)
        console.log(counter);
      }
    }

  return (
    <>
      <h1>Coffe aur react</h1>
      <h2>Counter value : {counter}</h2>


      <button
      onClick={addValue}
      
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
