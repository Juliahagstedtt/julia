import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Pronto from './components/Pronto'
import ProntoCounter from './components/ProntoCounter'
import Radio from './components/Player'
import LoggIn from './components/login/Current'
import Timer from './components/Timer'
import World from './components/World'
import TrafficLights from './components/TrafficLights'
import SunRise from './components/ajax/SunRise'
import Current from './components/login/Current'
import MakeupProducts from './components/ajax/MakeupProducts'
import Formular from './components/Formular'
import Library from './components/Library'
import Form from './components/Form'
import PinkForum from './components/PinkForum'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pronto" element={<Pronto />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/current" element={<Current />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/world" element={<World />} />
        <Route path="/trafficlights" element={<TrafficLights />} />
        <Route path="/sunrise" element={<SunRise />} />
        <Route path='/makeupproducts' element={<MakeupProducts /> } />
        <Route path='/formular' element={<Formular />} />
        <Route path='/library' element={<Library />} />
        <Route path='/form' element={<Form />} />
        <Route path='/pinkforum' element={<PinkForum />} />

      </Routes>
    </Router>
  )
}

export default App
