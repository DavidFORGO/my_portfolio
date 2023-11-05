// import React from 'react';
// import MonRouter from './routes'
// const App = () => <MonRouter />
// export default App;
//import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import BlogSingle from './components/BlogSingle'

function App() {
  return (
    <div>
  <Header />
  <main className="wrapper">
    <Home />

   <About/>
   
   <Experience/>
   <Service/>
    <Portfolio/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer/>
  </main>

  <BlogSingle/>
  
</div>

  );
}

export default App;
