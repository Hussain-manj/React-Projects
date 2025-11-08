import { useState } from 'react'
import React from 'react';
function App() {
  const [color,setColor] = useState('olive');  

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-4">
          <div className='fixed flex flex-wrap gap-3 justify-center bg-white rounded-3xl p-4 shadow-lg'>
            <button onClick={() => setColor('blue')}
              className='bg-blue-500 px-4  rounded-xl shadow outline-none'>
              Blue
            </button>
             <button onClick={() => setColor('black')}
              className='bg-black px-4 text-white rounded-xl shadow outline-none'>
              Black
            </button>
             <button onClick={() => setColor('#964B00')}
              className=' bg-orange-950 text-white px-4 rounded-xl shadow outline-none'>
              Brown
            </button>
             <button onClick={() => setColor('red')}
              className='bg-red-500 px-4  rounded-xl shadow outline-none'>
              Red
            </button>
             <button onClick={() => setColor('green')}
              className='bg-green-500 px-4  rounded-xl shadow outline-none'>
              Green
            </button>
             <button onClick={() => setColor('purple')}
              className='bg-purple-500 px-4  rounded-xl shadow outline-none'>
              Lavender
            </button>
             <button onClick={() => setColor('white')}
              className='bg-white-500 px-4  rounded-xl shadow outline-none'>
              White
            </button>
             <button onClick={() => setColor('hotpink')}
              className='bg-pink-500 px-4  rounded-xl shadow outline-none'>
              Pink
            </button>
             <button onClick={() => setColor('orange')}
              className='bg-orange-500 px-4  rounded-xl shadow outline-none'>
              Orange
            </button>
             <button onClick={() => setColor('yellow')}
              className='bg-yellow-500 px-4  rounded-xl shadow outline-none'>
              Yellow
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
