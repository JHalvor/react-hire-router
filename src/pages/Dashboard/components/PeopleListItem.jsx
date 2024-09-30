import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  return (
    <li>
      <Link to={`/view/${person.id}`}>
        <h3>
          {person.firstName} {person.lastName}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
