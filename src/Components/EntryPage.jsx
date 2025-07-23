import React from 'react'
import './Canvas.css'
import { useNavigate } from 'react-router-dom'

const EntryPage = () => {
    const navigate = useNavigate()
  return (
    <>
    
    <div className='entryPage'>
        <h1>Design Trove    </h1><br/>
        <button onClick={() => navigate('/Design')}>Design ➤</button>
    </div>
    <div>
    </div>
    </>
  )
}

export default EntryPage