import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const { uuid } = useParams()
  const [person, setPerson] = useState(null)

  const findPerson = () => {
    people.forEach((p) => {
      if (p.login.uuid === uuid) {
        setPerson(p);
      }
    })
  }

  useEffect(() => {
    findPerson()
  }, [])

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
