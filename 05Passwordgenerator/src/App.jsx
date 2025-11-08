import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length  + 1 )
      pass += str[randomIndex]
    }

    setPassword(pass)

  } ,[length, numberAllowed, charAllowed, setPassword])

  

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
      alert('Password copied to clipboard!')
  }, [Password])  

  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, charAllowed, passwordgenerator])

  return (
    <>
      <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg p-6 mt-10 text-white bg-gray-800'>
        <div className='flex shadow rouded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            readOnly
            placeholder='Generated Password'
            ref={passwordRef}
            className='flex-1 p-2 bg-gray-700 text-white outline-none'
          />
          <button  
          onClick={copyPasswordtoClipboard}
          className='bg-blue-500 px-4 py-2 text-white hover:bg-blue-600' >
            Copy
          </button>
        </div>
    

    <div className='flex justify-between mb-4 gap-5'>

   
        <div className=''>
          <label className='block mb-2 text-sm font-medium'>Password Length {length}</label>
          <input
            type="range"
            min="8"  
            max="100"
            value={length}
            onChange={(e) => setlength(e.target.value)}/>


        </div>

        <div className=''>
          <label className='block mb-2 text-sm font-medium'>Include Special Characters</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
        </div>


        <div className=''>
          <label className='block mb-2 text-sm font-medium'>Include Numbers</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
        </div>

 </div>

      </div>  
  </>
  )
}

export default App
