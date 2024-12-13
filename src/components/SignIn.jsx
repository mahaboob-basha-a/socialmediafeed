import React from 'react'
import { googleIcon, loginBanners, logo } from '../assets/loginBanners'
import LoginImage from './LoginImage'
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
    const { user, signInWithGoogle } = useAuth();

    if(user){
        return <Navigate to='/feed' />
    }
  return (
    <div className='h-[100vh] w-[360px] border-slate-300 border-2 rounded-lg relative'>
        {/* banners */}
        <div className='flex justify-center items-start overflow-hidden'>
            <div>
                {loginBanners.slice(0,3).map(item=>{
                    const {id,url} = item
                    return (
                        <LoginImage key={id} url={url} />
                    )
                })}
            </div>
            <div className='-translate-y-24 px-2'>
                {loginBanners.slice(3,6).map(item=>{
                    const {id,url} = item
                    return (
                        <LoginImage key={id} url={url} />
                    )
                })}
            </div>
            <div>
                {loginBanners.slice(6,9).map(item=>{
                    const {id,url} = item
                    return (
                        <LoginImage key={id} url={url} />
                    )
                })}
            </div>
        </div>
        {/* signIn button */}
        <div className='absolute bg-white bottom-0 w-[100%] h-[200px] flex flex-col justify-start items-center rounded-t-[64px]'>
               <div className='flex items-center justify-center -ml-4'>
                    <img src={logo} className='w-24 h-24 object-contain' alt="" />
                    <h1 className='text-slate-800 font-semibold text-2xl -ml-5'>Vibesnap</h1>
                </div> 
                <p className='text-black text-sm -mt-4'>Moments That Matter, Shared Forever.</p>
                {/* button container */}
                <button onClick={signInWithGoogle} className='flex items-center justify-center gap-3 bg-black text-white px-6 py-2 rounded-3xl cursor-pointer mt-4'>
                    <img src={googleIcon} alt="" />
                    Continue with Google
                </button>
        </div>
    </div>
  )
}

export default SignIn