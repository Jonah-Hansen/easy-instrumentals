import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import CreatePage from "./pages/CreatePage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/create' />} />
        <Route path="/create" element={<CreatePage />} />
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
