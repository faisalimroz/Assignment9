
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Blog from './Blog/Blog'
import Destination from './Destination/Destination';
import Contact from './Contact/Contact'
import Login from './Login/Login'
import Register from './Register/Register';
import Required from './Required/Required';
import NotFound from './NotFound/NotFound';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function App() {
 
  return ( 
    <div className="App">
    <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/destination/:destinationId/:fname/:fprice' element={
        
          <Required>
            
            <Destination/>
          </Required>}> 
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route> 
        <Route path='/register' element={<Register></Register>}></Route> 
       
        <Route path='*' element={<NotFound></NotFound>}></Route> 
     
     </Routes>
    
    </div>
  );
}

export default App;
