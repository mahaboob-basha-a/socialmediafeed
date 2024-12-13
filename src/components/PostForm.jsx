import React, { useState } from 'react';
import createPost from '../supabase/createPost.js'; // Import the createPost function
import { useAuth } from '../AuthContext.js';
import { IoMdArrowBack } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Loader from './Loader.jsx';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const {user,loader,setLoader} = useAuth()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if(selectedFile){
        setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(content && file && user.id){
        setLoader(true)
        await createPost(content, file,user.id); // Create the post with content and file
        setLoader(false)
        setContent(''); // Clear the content input
        setFile(null);  // Clear the file input
        return navigate('/feed')
    }
  };
  if(!user){
    return <Navigate to={'/sign-in'} />
  }
  return (
    <div className='h-[100vh] w-[360px] border-slate-300 border-2 p-4'>
        <div className='flex items-center gap-3'>
        <Link to='/feed'><IoMdArrowBack size={26} /></Link>
        <h1 className='font-bold text-black text-xl'>
            New Post
        </h1>
        </div>
    <form className='h-[94%] w-full flex flex-col justify-between mt-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6'>
            <textarea
                className='resize-none rounded-md border-2 w-full h-40 p-2 bg-[#D9D9D99C] outline-none text-sm' 
                value={content}
                onChange={(e) => setContent(e.target.value)} 
                placeholder="What's on your mind?" 
                />
            <label className='flex items-center gap-2 text-black font-semibold' htmlFor="uploadFile"><FaFolderOpen size={18} color='red' /> Choose the file</label>
            <input type="file" onChange={handleFileChange} id='uploadFile' hidden/>
            {loader && <Loader />}
        </div>
      <button disabled={loader} className={`${loader ? 'bg-gray-600' : 'bg-black'} text-white w-full py-3 rounded-3xl cursor-pointer mt-4`} type="submit">CREATE</button>
    </form>
    </div>
  );
};

export default PostForm;
