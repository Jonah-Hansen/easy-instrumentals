import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_API_URL || '', process.env.REACT_APP_API_KEY || '')

export const getAllTracks = async () => {
  const { data } = await supabase.from('tracks').select('id,title,type')
  return data
}

export const getTrackById = async (id) => {
  const { data } = await supabase.from('tracks').select('*').eq('id', id)
  return data
}

export const getMidiURL = async (id) => {
  const { data } = await supabase.storage.from('midi').getPublicUrl(`${id}.mid`)
  return data.publicUrl
}