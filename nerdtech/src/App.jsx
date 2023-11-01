import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center"
        style={{
          width: "100vw",
          height: "100vh",
        }}>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>} />
          </Routes>
      </div>
    </>
  )
}

export default App
