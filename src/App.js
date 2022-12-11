import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreatePage from "./pages/CreatePage/CreatePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={
          <>
            <h1>Page Not Found</h1>
            <Link to='/'>Home</Link>
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
