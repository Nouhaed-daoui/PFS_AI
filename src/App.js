// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';

import HeaderHome from './components/HeaderHome';
import NavBar from './components/NavBar';
import { News } from './components/News';
import NewsDetails from './components/NewDetails';
import { newsData } from './data/newsData';
import GetDiagnostic from './components/GetDiagnostic';
import Result from './components/Result';
import ContactUsPage from './components/ContactUS';
import History from './components/History';
import Footer from './components/Footer'; // error here: 'Footer' is declared but its value is never read.ts(6133)

const App = () => {

  const styles = {
    
    headerHome: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
    },
    
  };

  return (
    <Router>
      <HeaderHome style={styles.headerHome} />
      {/* <NavBar /> */}
      {/* <GetDiagnostic /> */}

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/library" element={<Blog/>} />
          <Route path="/library/:blogId" element={<BlogDetail/>} />
          <Route path="/news" element={<News />} />
          <Route path="/GetDiagnostic" element={<GetDiagnostic />} />
          <Route path="/result" element={<Result />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/news/post/:id" element={<NewsDetails newsData={newsData} />} />
          <Route path="/History" element={<History />} />
        </Routes>

        <Footer/>

      
    </Router>
    
  );
};

export default App;
