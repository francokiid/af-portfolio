import './App.css'
import { Navbar } from './Navbar';
import { Home, About } from './components';

export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}