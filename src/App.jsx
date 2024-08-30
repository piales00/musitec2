import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
// Importa otras páginas que quieras incluir en la navegación
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import CareerPage from './pages/CareerPage/CareerPage';
import CoursePage from './pages/CoursePage/CoursePage';
import AgreementPage from './pages/AgreementPage/AgreementPage';
import NewPage from './pages/NewPage/NewPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import StudyPlanPage from './pages/CareerPage/StudyPlanPage';
import Vocal from './pages/CoursePage/vocal';
import Tecnica from './pages/CoursePage/tecnical';
import Teoria from './pages/CoursePage/teoria';


function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/course" element={<CoursePage/>} />
          <Route path="/agreement" element={<AgreementPage/>} />
          <Route path="/new" element={<NewPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vocal" element={<Vocal/>} />
          <Route path="/tecnical" element={<Tecnica/>} />
          <Route path="/teoria" element={<Teoria/>} />

          <Route path="/studyPlan/:id" element={<StudyPlanPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




