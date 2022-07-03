import Footer from './components/footer';
import Header from './components/header';
import Slideshow from './components/slide';
import Student from './pages/home';
import Error from './pages/err';
import { Routes,Route,Switch} from 'react-router-dom';
import Body from './components/body';
import Register from './pages/register';
import Faculty from './pages/faculty';
import Gallery from './pages/gallery';
import React, { Suspense, lazy } from 'react';
import Logintype from './pages/logintype';
import ProtectedRoute from "./components/protectedRoute";
import Studentd from './pages/students';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div>
      <Header />
      
      <UserAuthContextProvider>
      <Routes>

        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Logintype />}></Route>
        <Route path='/' exact element={<Slideshow />}></Route>
        <Route path='/e-commerce-website' exact element={<Slideshow />}></Route>
        <Route path='*' element={<Error />} />
        <Route path='/staff' element={<Body />}></Route>
        <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                   <Dashboard />
                  </ProtectedRoute>
                }
              />
         <Route path='/student' element={<Student />} />
         <Route path='/faculty' element={<Faculty />} />

         <Route path='/gallery' element={<Gallery />}/>
  
     
    
          
      </Routes>
      
      </UserAuthContextProvider>
      
      <Footer />
      </div>
  );
}
export default App;
