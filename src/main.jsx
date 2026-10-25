
import { createRoot } from 'react-dom/client'
import './index.css';
import {Toaster} from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './views/Home/Home';
import About from './views/About/About';
import Properties from './views/Properties/Properties';
import PropertyDetails from "./views/PropertyDetails/PropertyDetails";

const root = createRoot(document.getElementById('root'))


root.render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/property/:id' element={<PropertyDetails />} />

    </Routes>

    </BrowserRouter>
    
    <Toaster />
    </>,

  
    

);
