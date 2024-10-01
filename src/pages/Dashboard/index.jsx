import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import PeopleList from './components/PeopleList'
import PersonProfile from '../PersonProfile';

function Dashboard({ people, hiredPeople, setHiredPeople }) {
  
  
  console.log("people: ", people)
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList setPeople={setHiredPeople} people={hiredPeople} setHiredPeople={setHiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
