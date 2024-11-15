import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import About from './About/About'
import Careers from './Careers/Careers'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/careers" element={<Careers/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
