import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {HashRouter,Route,Routes,Navigate} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'


import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className='App'>      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="projects" element={<Portfolio/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="/*" element={ <Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
