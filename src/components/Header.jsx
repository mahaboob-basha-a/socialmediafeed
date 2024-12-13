import React from 'react'
import { PiSignOutLight } from "react-icons/pi";
import { useAuth } from '../AuthContext';

const Header = ({avatar_url,full_name}) => {
  const {signOut} = useAuth();
  return (
    <div className='flex justify-between items-center gap-2'>
      <div>
        <img src={avatar_url} className='w-10 rounded-full' alt="avatar" />
        <div className='translate-y-1'>
          <p className='text-[11px] text-slate-400'>Welcome Back</p>
          <h1 className='font-semibold text-slate-700'>{full_name}</h1>
        </div>
      </div>
      <button title='sign out' onClick={signOut} ><PiSignOutLight size={26} /></button>
    </div>
  )
}

export default Header