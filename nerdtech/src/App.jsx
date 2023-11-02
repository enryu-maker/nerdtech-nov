import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Services from './components/services'
import dtbgt from './assets/DesktopDesign-4.png'



function App() {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center"
        style={{
          width: "100vw",
        }}>
          <img src={dtbgt} alt="" className='absolute inset-0 w-screen h-screen z-0' />
          <Header/>
          <Home/>
          <Services/>
          {/* <Routes>
              <Route path="/" element={<Home/>} />
          </Routes> */}
      </div>
    </>
  )
}

export default App
