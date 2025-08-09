import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/AboutusPolicy/ScrollToTop';
import Footer from './components/footer/Footer';
import Home from './components/home/Home.js';
import Imageupload from './components/Slider/Imageupload';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import MainPage from './components/Authentication/MainPage';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import Dashboard from './components/Authentication/Dashboard';
import UpdateDetails from './components/Authentication/UpdateDetails';
import Navigation from './components/Navigation/Navigation';
import LinkNavigation from './components/Navigation/LinkNavigation';
import ServiceRequest from './components/pages/ServiceRequest';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Admin from './components/adminDashboard/Admin.js'
import AdminLogin from './components/adminDashboard/AdminLogin.js'
import MeteringCatalogs from './components/pages/MeteringCatalogs.js';
import Recruitments from './components/pages/Recruitments.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
         <LinkNavigation />
        <ScrollToTop/> {/* Automatically scroll pages to the top */}
         <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/uploads' element={<Imageupload/>}/>
          <Route path='/about' element={<About/> }/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/servicerequest' element={<ServiceRequest/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/catalog' element={<MeteringCatalogs/>}/>
          <Route path='/recruitment' element={<Recruitments/>}/>

          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/reset-password/:token' element={<ResetPassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/update-details' element={<UpdateDetails/>}/> 

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
