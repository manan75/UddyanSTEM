import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import CoursesPage from './components/Courses';
import CourseDetail from './components/CourseDetail'; 

function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>

        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Carousel />
              <Cards />
            </>
          }
        />

        {/* Courses listing */}
        <Route path="/CoursesPage" element={<CoursesPage />} />

        {/* Individual course page */}
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
