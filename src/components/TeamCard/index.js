import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <li className="team-card-container">
      <Link className="team-card" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} className="team-img" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
