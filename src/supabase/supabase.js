import { createClient } from '@supabase/supabase-js';

//initialize supabase client 
const supabase = createClient(process.env.REACT_APP_API_URL || '', process.env.REACT_APP_API_KEY || '')

//returns an array of objects with keys id, title, type
export const getAllTracks = async () => {
  const { data } = await supabase.from('tracks').select('id,title,type')
  return data
}

// returns an array with the all details for one track
export const getTrackById = async (id) => {
  const { data } = await supabase.from('tracks').select('*').eq('id', id)
  return data
}

// get a url for the file associated with the specified track id
export const getMidiURL = async (id) => {
  const { data } = await supabase.storage.from('track-files').getPublicUrl(`${id}`)
  return data.publicUrl
}