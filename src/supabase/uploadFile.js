import supabase from './supabaseClient'; // Importing the supabase client

const uploadFile = async (file) => {
  // Generate a unique file name using the current timestamp
  const fileName = `${Date.now()}-${file.name}`;
  
  // Upload the file to Supabase Storage
  const { error } = await supabase.storage
    .from('media') // 'media' is the name of the bucket you created in Supabase
    .upload(fileName, file);

  if (error) {
    console.error('Upload failed:', error);
    return null;
  }

  // Get the public URL for the uploaded file
  const { publicUrl } = supabase.storage
    .from('media')
    .getPublicUrl(fileName).data;
  return publicUrl; // Return the file URL to use in the database
};

export default uploadFile;
