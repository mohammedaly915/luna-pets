import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Components/About';
import Galleryies from './Components/Galleryies';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Blogs from './Components/Blogs';
import Donate from './Components/Donate';
import Contact from './Components/Contact';

function App() {
  return (<>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='donate' element={<Donate/>} />
        <Route path='gallery' element={<Galleryies/>} />
        <Route path='blog' element={<Blogs/>} />
      </Routes>
    {/* <About/> */}
  </>
  );
}

export default App;
