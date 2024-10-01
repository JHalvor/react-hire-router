import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm( { hiredPeople, person, setHiredPeople }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    navigate("/");
    if (
      hiredPeople.some(
        (hiredPerson) => hiredPerson.login.uuid === person.login.uuid,
      )
    )
      return;

    setHiredPeople([...hiredPeople, { ...person, wage }]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
