import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import './App.css'

export default function App() {
  const numberOfPeople = 5
  const peopleURL = `https://randomuser.me/api/?results=${numberOfPeople}`
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  const fetchPeople = async () => {
    const response = await fetch(peopleURL);
    const jsonData = await response.json();
    setPeople(jsonData.results)
  }

  useEffect(() => {
    fetchPeople()
  }, []);

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
        <Route path="/" element={<Dashboard people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />} />
        <Route path="/view/:uuid" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}
