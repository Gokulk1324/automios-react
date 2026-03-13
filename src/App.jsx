import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Counter from "./components/Counter.jsx";
import Users from "./components/Users.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Posts from "./pages/Posts.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;