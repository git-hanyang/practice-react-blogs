// import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Home from './home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import blogSample from './data/BlogSample';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">

        <Navbar/>
        {/* Navbar is just links and not assigning to a component */}

        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/blog/:id' element={<BlogDetails/>}/>
          </Routes>

          {/* These routes allows contents to be displayed on the same page, instead of refreshing the page itself */}
        </div>

      </div>
    </BrowserRouter>
      
    
  );
}

export default App;


// type sfc for shortcut