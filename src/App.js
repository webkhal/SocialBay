import './App.css';
import {  Routes, Route } from 'react-router-dom';
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact Theme
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primeflex/primeflex.css"; // PrimeFlex CSS 
import 'primeicons/primeicons.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Forgotpassword from './components/forgotpassword/forgotpassword';
import ChangePassword from './components/changepassword/changepassword';
import Dashboard from './components/dasboard/dashboard';
import Header from  './components/header/header'
import Footer from './components/footer/footer'
import States from './components/masterData/states/states';
import Cities from './components/masterData/cities/cities'
import Areas from './components/masterData/areas/areas'
import RoleCategory from './components/masterData/roleCategory/roleCategory';


function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/forgot-password' element={<Forgotpassword/>} />
  <Route path='/change-password' element={<ChangePassword/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/header' element={<Header/>} />
  <Route path='/footer' element={<Footer/>} />
  <Route path='/states' element={<States/>} />
  <Route path='/cities' element={<Cities/>} />
  <Route path='/ares' element={<Areas/>} />
  
  <Route path='/roleCategory' element={<RoleCategory/>} />
  {/* <Route path='/footer' element={<Footer/>} />
  <Route path='/footer' element={<Footer/>} />
  <Route path='/footer' element={<Footer/>} /> */}


  
  
</Routes>
</>
  );
}

export default App;
