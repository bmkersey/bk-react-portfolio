import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <Header />
        <Project />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
