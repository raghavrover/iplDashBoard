import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsObject = await response.json()
    const {teams} = teamsObject
    const formattedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teams: formattedTeams, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="home-route-bg-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-dashboard-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {teams.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamData={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
