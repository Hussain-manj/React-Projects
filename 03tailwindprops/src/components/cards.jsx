import React from 'react'

function Cards({Title, Job}) {
  return (

        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://plus.unsplash.com/premium_photo-1750780506143-eee8a003d72a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {Title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{Job}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  
  )
}

export default Cards