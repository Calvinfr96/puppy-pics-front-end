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
  const heading = "Puppy Pics"
  const baseURL = "http://127.0.0.1:3000"

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

  function logOut() {
    localStorage.removeItem('token')
    setUser(null)
  }


  return (
    <Router>
      <div className="App">
        <Nav user={user} logOut={logOut} />
        <Switch>
          <Route path="/" exact><DogsContainer currentUser={user} baseURL={baseURL} heading={heading}/></Route>
          <Route path="/login" exact><LogInPage setUser={setUser} baseURL={baseURL}/></Route>
          <Route path="/breeds" exact><BreedPage baseURL={baseURL}/></Route>
          <Route path="/breeds/:id"><BreedDetail baseURL={baseURL} user={user}/></Route>
          <Route path="/profile" exact><ProfilePage currentUser={user} setCurrentUser={setUser} baseURL={baseURL}/></Route>
          <Route path="/new/user"><NewUserFrom setCurrentUser={setUser} baseURL={baseURL}/></Route>
          <Route path="/new/dog"><NewDogForm baseURL={baseURL}/></Route>
          <Route path="/new/breed"><NewBreedForm baseURL={baseURL}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;