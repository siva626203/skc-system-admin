import Footer from './components/footer';
import Header from './components/header';
import Slideshow from './components/slide';
import Student from './pages/home';
import Error from './pages/err';
import { Routes,Route,Switch} from 'react-router-dom';
import Body from './components/body';

import Faculty from './pages/faculty';
import Gallery from './pages/gallery';
import React, { Suspense, lazy } from 'react';
import Logintype from './pages/logintype';


function App() {
  return (
    <div>
      <Header />
      
      
      <Routes>
       
        <Route path='/login' element={<Logintype />}></Route>
        <Route path='/' exact element={<Slideshow />}></Route>
        <Route path='/e-commerce-website' exact element={<Slideshow />}></Route>
        <Route path='*' element={<Error />} />
        <Route path='/staff' element={<Body />}></Route>
         <Route path='/student' element={<Student />} />
         <Route path='/faculty' element={<Faculty />} />
         <Route path='/gallery' element={<Gallery />}/>
         
      </Routes>
      
      
      
      <Footer />
      </div>
  );
}
export default App;
