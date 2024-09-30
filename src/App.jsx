import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const handleHire = (person) => {
    setHiredPeople([ ...hiredPeople, person ])
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile onHire={handleHire} />} />
      </Routes>
    </>
  )
}
