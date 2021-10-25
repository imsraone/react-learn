import './App.css';
import { Component} from 'react'
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'

class App extends Component{
  constructor(){
    super()
    this.state = {
      users:[],
      searchString: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchString: e.target.value})
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }

  render(){
    const { users, searchString} = this.state
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchString.toLowerCase()))
    return(
      <div className="App">
        <SearchBox
          placeholder="Search Users"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    )
  }
}
export default App;
