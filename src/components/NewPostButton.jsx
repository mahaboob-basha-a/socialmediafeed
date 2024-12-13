import React from 'react'
import { Link } from 'react-router-dom'
import { IoAddSharp } from "react-icons/io5";

const NewPostButton = () => {
  return (
    <div className='absolute bottom-4 right-2 w-12 h-12 flex items-center justify-center bg-black rounded-full'>
        <Link to={'/new-post'}><IoAddSharp color='white' size={30} /></Link>
    </div>
  )
}

export default NewPostButton;