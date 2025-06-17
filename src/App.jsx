import './App.css'
import { Navbar } from './Navbar';
import { Home, About, Skills, Projects, Contact } from './components';

export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}