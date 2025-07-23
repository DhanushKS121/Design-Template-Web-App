import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Design from './Components/Design'
import Preview from './Components/Preview'
import EntryPage from './Components/EntryPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<EntryPage />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/Render' element={<Preview />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
