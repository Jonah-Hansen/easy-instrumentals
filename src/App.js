import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { getTracks } from './supabase/supabase';

function App() {

  //demo usage of supabase queries
  const [tracks, setTracks] = useState(null)
  useEffect(() => {
    getTracks().then(data => setTracks(data))
  }, [])

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
