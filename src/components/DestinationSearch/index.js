// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const searchInput = event.target.value
    this.setState({searchInput})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinationsList = destinationsList.filter(each => {
      const searchInputlower = searchInput.toLowerCase()
      const name = each.name.toLowerCase()
      return name.includes(searchInputlower)
    })
    return (
      <div className="bg-container">
        <div className="search-card">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>

          <ul className="results-container">
            {filteredDestinationsList.map(each => (
              <DestinationItem destinationsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
