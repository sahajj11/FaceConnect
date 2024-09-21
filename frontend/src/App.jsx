import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Authentication from './pages/Authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './pages/VideoMeet'
import HomeComponent from './pages/HomeComponent'
import History from './pages/History'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/:url" element={<VideoMeet />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/history" element={<History />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
