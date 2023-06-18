import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isTeamDetailsLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getFormattedLatestMatchDetails = latestMatchDetails => ({
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
  })

  getFormattedRecentMatches = recentMatches => {
    const newRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    return newRecentMatches
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()

    const formattedData = {
      teamBannerUrl: teamData.team_banner_url,
      latestMatchDetails: teamData.latest_match_details,
      recentMatches: teamData.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData
    const newLatestMatchDetails = this.getFormattedLatestMatchDetails(
      latestMatchDetails,
    )
    const newRecentMatches = this.getFormattedRecentMatches(recentMatches)

    const newData = {teamBannerUrl, newLatestMatchDetails, newRecentMatches}
    this.setState({teamDetails: newData, isTeamDetailsLoading: false})
  }

  renderMatchDetails() {
    const {teamDetails, isTeamDetailsLoading} = this.state
    const {teamBannerUrl, newLatestMatchDetails, newRecentMatches} = teamDetails

    return (
      <>
        <div className="team-matches-container">
          {isTeamDetailsLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <img
                src={teamBannerUrl}
                className="team-banner"
                alt="team banner"
              />
              <p className="latest-matches-text">Latest Matches</p>
              <LatestMatch latestMatchDetails={newLatestMatchDetails} />
              <ul className="recent-matches">
                {newRecentMatches.map(eachMatch => (
                  <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }

  render() {
    return <>{this.renderMatchDetails()}</>
  }
}

export default TeamMatches
