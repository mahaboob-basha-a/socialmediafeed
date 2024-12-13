import supabase from './supabaseClient.js';
import uploadFile from './uploadFile.js'; // Import the file upload function

const createPost = async (content, file, userId) => {
  let fileUrl = null;

  // If there's a file, upload it first
  if (file) {
    fileUrl = await uploadFile(file);
    if (!fileUrl) return console.log('no file url'); // Exit if upload fails
  }

  // Insert post data into the 'posts' table
  const { data, error } = await supabase
    .from('posts')
    .insert([{ content, image_url: fileUrl, user_id: userId }]); // Replace 'user-id-here' with the actual user ID

  if (error) {
    console.error('Error creating post:', error);
    alert('failed to create post')
  } else {
    console.log('Post created:', data);
    alert('post created succes')
  }
};

export default createPost;
