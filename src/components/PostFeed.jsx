import React, { useState, useEffect } from 'react';
import supabase from '../supabase/supabaseClient.js';
import TimeAgo from './TimeAgo.jsx';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoader(true)
      const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false });

if (error) {
  console.error('Error fetching posts:', error);
} else {
  console.log('Fetched posts:', data);
  setPosts(data)
}
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? posts.map((post) => (
        
        <div key={post.id} className='w-full rounded-md mb-2 border-1 shadow-md bg-gray-100 p-3' >
          <TimeAgo timestamp={post.created_at} />
          <p className='capitalize text-sm'>{post.content}</p>
          {post.image_url && (
            post.image_url.endsWith('.mp4') || post.image_url.endsWith('.mov') ? (
              <video controls autoPlay={true} className='object-cover h-80 w-full rounded-2xl mt-2'>
                <source src={post.image_url} type="video/mp4" />
              </video>
            ) : (
              <img src={post.image_url} className='h-64 object-conver w-full rounded-2xl mt-2' alt="Post media" />
            )
          )}
        </div>
      )) : <div>
        <h1 className='text-center mt-8'>Feed has empty right now</h1>
      </div> 
      }
    </div>
  );
};

export default PostFeed;
