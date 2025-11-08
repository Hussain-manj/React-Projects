import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-4xl">Hello</h1>
      <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={() =>
          document.documentElement.classList.toggle("dark")
        }
      >
        Toggle Dark
      </button>
    </div>
  );
}
