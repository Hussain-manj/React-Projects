import AddTodo from "./components/Addtodo"
import Todos from "./components/Todos"



function App() {
 

  return (
    <>
      {/* <div className="flex justify-center h-screen bg-gray-100 text-gray-800 text-2xl font-bold p-4">
      Redux Toolkit Example
      </div> */}
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
