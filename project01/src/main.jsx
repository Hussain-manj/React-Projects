import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



// const Anotheruser = 'salamalaikum habibi kya haal chaaal!!'

// function MyApp() {

//   return (
//     <div>
//           <h3>my name is custom vite!!</h3>
//     </div>
    
//   )
// }

// const anotherElement = (
//       <a href="https://google.com" target = '_blank' > Visit
//        google </a>
// )

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google'
)


createRoot(document.getElementById('root')).render(
        reactElement
)
