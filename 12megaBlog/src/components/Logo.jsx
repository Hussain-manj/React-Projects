import React from 'react';

function Logo({ width = "100px" }) {
  return (
    <div className='flex'>
    
    <img
      src="https://images.unsplash.com/photo-1611780427130-996d9882dc41?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Sain's Logo"
      className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 h-[60px] w-[60px]"
      // style={{ width }}
    />
    <p className='pt-4 px-4 font-medium'>Sain's</p>
    </div>
  );
}

export default Logo;
