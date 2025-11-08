import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUser } = useContext(Usercontext)

    const handlesubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }


  return (
    <>
   
     <h2>Login</h2>
     <input type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       placeholder="Username"   
     />
     <input type="text"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       placeholder="password"   
     />
    <button onClick={handlesubmit}>
        Submit
    </button>
    </>
  )
}

export default Login