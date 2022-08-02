import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import HairTransplantPage from './pages/HairTransplantPage';
import DhiAndFuePage from './pages/DhiAndFuePage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import OurClinicPage from './pages/OurClinicPage';
import BeforeAfterPage from './pages/BeforeAfterPage';

function App() {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;

  return (
    <BrowserRouter>
      <div className='App' style={{ width: width, height: height }}>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route
            path='/hairtransplant'
            exact
            element={<HairTransplantPage />}
          />
          <Route path='/dhiandfue' exact element={<DhiAndFuePage />} />
          <Route path='/blog' exact element={<BlogPage />} />
          <Route path='/aboutus' exact element={<AboutUsPage />} />
          <Route path='/ourclinic' exact element={<OurClinicPage />} />
          <Route path='/beforeafter' exact element={<BeforeAfterPage />} />
          <Route path='/contactus' exact element={<ContactUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
