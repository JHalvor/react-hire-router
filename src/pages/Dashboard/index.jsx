import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import PeopleList from './components/PeopleList'
import PersonProfile from '../PersonProfile';

function Dashboard(props) {
  const { hiredPeople } = props

  const numberOfPeople = 5
  const peopleURL = `https://randomuser.me/api/?results=${numberOfPeople}`
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    const response = await fetch(peopleURL);
    const jsonData = await response.json();

    jsonData.results.forEach(person => {
      setPeople((people) => [ ...people, { 
        id: people.length + 1, 
        firstName: person.name.first, 
        lastName: person.name.last } ])
    })
  }

  useEffect(() => {
    fetchPeople()
  }, []);
  
  console.log("people: ", people)
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
      <Routes>
        <Route path="/view/:id" element={<PersonProfile people={people} />} />
      </Routes>
    </main>
  )
}

export default Dashboard
