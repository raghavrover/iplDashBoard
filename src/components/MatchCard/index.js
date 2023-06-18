import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const matchStatusStyle = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card-list-item">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="competing-team result">{result}</p>
      <p className={`${matchStatusStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
