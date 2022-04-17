
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Share/Header/Header';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import LogIn from './components/Home/LogIn/LogIn';
import SignUp from './components/Home/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Share/Footer/Footer';
import ServiceDetailPage from './components/Share/ServiceDetailPage/ServiceDetailPage';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='service/:serviceId' element={<ServiceDetailPage></ServiceDetailPage>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App
