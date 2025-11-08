import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { Outlet } from 'react-router-dom';
import {login, logout}from './store/authslice';
import {Header, Footer} from './components/index';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData)=> {
        if (userData) {
          dispatch(login(userData));
        }
        else{
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [dispatch]);


  return ! loading ? (
    <div className='  flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-6 max-w-4xl w-full'>
        <Header/>
        <main>
          <h2 className='flex justify-center pt-6 font-medium'>Here are the best blog's for you:</h2>
        <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );


}

export default App
