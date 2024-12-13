import React from 'react'
import { useAuth } from '../AuthContext'
import { Navigate } from 'react-router-dom'
import Header from './Header'
import PostFeed from './PostFeed'
import NewPostButton from './NewPostButton'
import Loader from './Loader'

const Feed = () => {
  const {user,loader} = useAuth()

  if(!user){
    return <Navigate to='/sign-in' />
  }
  
  const {avatar_url,full_name} = user.user_metadata;
  
  return (
    <div className='h-[100vh] w-[360px] border-slate-300 border-2 p-4 relative'>
        {/* profile section */}
        <Header avatar_url={avatar_url} full_name={full_name} />
        {/* <button onClick={signOut}>sign out</button> */}
        {/* feed section */}
        <h1 className='font-bold text-black text-xl mt-4'>Feeds</h1>
        <section className='post-feed h-[82%] w-full border-0 mt-1 overflow-y-scroll'>
          {loader ? <Loader /> :
          <PostFeed />
          }
        </section>
        <NewPostButton />
    </div>
  )
}

export default Feed