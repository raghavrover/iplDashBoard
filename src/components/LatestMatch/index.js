import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    manOfTheMatch,
    umpires,
    result,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <>
      <div className="latest-match-card-container">
        <div className="latest-match-details-card-1">
          <div className="">
            <p className="competing-team-text text-style">{competingTeam}</p>
            <p className="competing-team-text text-style">{date}</p>
            <p className="text-style">{venue}</p>
            <p className="text-style">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="competing-team-logo-img sm-img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo-img lg-img"
          alt={competingTeam}
        />
        <div className="latest-match-details-card-2">
          <h1 className="first-innings-text text-style">First Innings</h1>
          <p className=" text-style">{firstInnings}</p>
          <h1 className="first-innings-text text-style">Second Innings</h1>
          <p className="text-style">{secondInnings}</p>
          <h1 className="man-of-the-match text-style">Man Of The Match</h1>
          <p className="text-style">{manOfTheMatch}</p>
          <h1 className="first-innings-text text-style">Umpires</h1>
          <p className="text-style">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
