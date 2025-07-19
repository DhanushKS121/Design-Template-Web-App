import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Design from './Components/Design'
import Preview from './Components/Preview'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Design />} />
          <Route path='/Render' element={<Preview />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
