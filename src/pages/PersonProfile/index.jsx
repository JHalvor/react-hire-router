import { useState } from 'react'
import { useParams } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people }) {
  const { id } = useParams()
  const [person, setPerson] = useState({
      id: 0,
      firstName: "",
      lastName: ""
    })

  console.log("Inside personProfile: ", people)

  if (!people) return <p>Loading...</p>

  setPerson(people.find((x) => x.id === Number(id)))

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
