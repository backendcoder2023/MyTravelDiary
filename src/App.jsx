// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Landingpage/Home';
import Navbar from './Landingpage/Navbar';
import Footer from './Landingpage/Footer'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Landingpage/Navbar';
// import Home from './Landingpage/Home';
// // import About from './About';
// import Stay from './Landingpage/Stay';
// import Food from './Landingpage/Food';
// import LoginSignup from './Landingpage/LoginSignup';
// import Search from './Landingpage/Search';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/stay" element={<Stay />} />
//         <Route path="/cuisines" element={<Food />} />
//         <Route path="/register" element={<LoginSignup />} />
//         <Route path="/search" element={<Search />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
