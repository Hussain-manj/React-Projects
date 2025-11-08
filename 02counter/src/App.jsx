import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



   let [counter, setcounter] = useState(0)

  const addvalue = () =>{
      console.log("clicked",counter);
      counter = counter + 1;
      setcounter(counter)
      }

    const substractvalue = () => {
     
        console.log("clicked",counter);
        if (counter < 0 ) {
          console.log("count is zero")
        }
          counter = counter - 1;
          setcounter(counter) 
      }
    
 
  return (
   <>
   <h1>Salamalaikum</h1>
   <h2>HoW's YOu</h2>
   <h3>Counter Value: {counter}</h3>
   <button onClick={addvalue}>
    Add Value : {counter}
   </button>
   <br />
   <button onClick={substractvalue}>
    Substract Value : {counter}
   </button>
   </>
  )
}

export default App
