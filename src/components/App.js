import '../App.css';
import DogsContainer from './DogsContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import NewUserFrom from './NewUserFrom';
import NewBreedForm from './NewBreedForm';
import NewDogForm from './NewDogForm';
import BreedPage from './BreedPage';
import BreedDetail from './BreedDetail';
import ProfilePage from './ProfilePage';
import { useState, useEffect } from 'react';
import LogInPage from './LogInPage';

function App() {
  const [user, setUser] = useState(null)
  const [dogs, setDogs] = useState([])
  const heading = "Puppy Pics"
  const baseURL = "https://desolate-waters-34836.herokuapp.com"

  const fetchUser = async () => {
    const token =  localStorage.getItem('token')
    const configObj = {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    if (token) {
      const data = await fetch(`${baseURL}/me`, configObj)
      const user = await data.json()
      setUser(user.user)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchAllDogs = async () => {
    const data = await fetch(`${baseURL}/dogs`)
    const dogs = await data.json()
    setDogs(dogs)
  }

  function logOut() {
    localStorage.removeItem('token')
    setUser(null)
  }


  return (
    <Router>
      <div className="App">
        <Nav user={user} logOut={logOut} />
        <Switch>
          <Route path="/" exact render={(props) => <DogsContainer {...props} dogs={dogs} fetchDogs={fetchAllDogs} currentUser={user}
           baseURL={baseURL} heading={heading} />} />
          <Route path="/login" exact render={(props) => <LogInPage {...props} setUser={setUser} baseURL={baseURL} />} />
          <Route path="/breeds" exact render={(props => <BreedPage {...props} baseURL={baseURL} />)} />
          <Route path="/breeds/:id" render={(props => <BreedDetail {...props} baseURL={baseURL} user={user} />)} />
          <Route path="/profile" exact render={(props) => <ProfilePage {...props} currentUser={user} setCurrentUser={setUser} baseURL={baseURL} />} />
          <Route path="/new/user" render={(props => <NewUserFrom {...props} setCurrentUser={setUser} baseURL={baseURL} />)} />
          <Route path="/new/dog" render={(props => <NewDogForm {...props} baseURL={baseURL} />)} />
          <Route path="/new/breed" render={(props => <NewBreedForm {...props} baseURL={baseURL} />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;