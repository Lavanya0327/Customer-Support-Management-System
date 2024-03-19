import {Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Navbar from './Components/Navbar';
import { Auth } from './Components/Auth';
import  Login  from './Components/Login';
import Signup from './Components/Signup';
import User from './Components/User';
import Customer from './Components/Customer';
import Ticket from './Components/Ticket';
function App() {
  return (
    <div className="App">
       <Auth>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;

