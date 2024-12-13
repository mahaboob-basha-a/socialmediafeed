import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from './supabase/supabaseClient.js';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    const fetchSession = async () => {
      setLoader(true)
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoader(false)
    };

    fetchSession();

    // Set up the listener for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      listener?.unsubscribe && listener.unsubscribe(); // Cleanup if listener exists
    };
  }, []);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.log('Error logging in:', error.message);

  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut,loader,setLoader }}>
      {children}
    </AuthContext.Provider>
  );
};
