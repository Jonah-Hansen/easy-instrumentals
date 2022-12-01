import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { REACT_APP_API_URL: api_url, REACT_APP_API_KEY: api_key } = process.env
  const supabase = createClient(api_url, api_key)

  useEffect(() => {
    const getTracks = async () => {
      let { data: tracks } = await supabase.from('tracks').select('*')
      console.log(tracks);
    }
    getTracks()
  }, [supabase])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/create' />} />
        <Route path="/create" element={<></>} />
        <Route path="*" element={
          <>
            <h1>Page Not Found</h1>
            <Link to='/'>Home</Link>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
