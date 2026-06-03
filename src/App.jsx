import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Projects from './components/Project/Projects'
import Feed from './components/Feed/Feed'
import Contact from './components/Contact/Contact'
import DotField from './components/DotField/DotField'
function App() {

  return (
    <>
      <DotField />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
