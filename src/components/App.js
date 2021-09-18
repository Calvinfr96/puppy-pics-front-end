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
import { useState } from 'react';
import LogInPage from './LogInPage';

function App() {
  const [user, setUser] = useState(null)
  const baseURL = "https://desolate-waters-34836.herokuapp.com"
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact render={(props) => <DogsContainer {...props} currentUser={user} baseURL={baseURL} />} />
          <Route path="/login" exact render={(props) => <LogInPage {...props} setUser={setUser} baseURL={baseURL} />} />
          <Route path="/breeds" exact render={(props => <BreedPage {...props} baseURL={baseURL} />)} />
          <Route path="/breeds/:id" render={(props => <BreedDetail {...props} baseURL={baseURL} />)} />
          <Route path="/profile" exact render={(props) => <ProfilePage {...props} currentUser={user} setCurrentUser={setUser} baseURL={baseURL} />} />
          <Route path="/new/user" render={(props => <NewUserFrom {...props} baseURL={baseURL} />)} />
          <Route path="/new/dog" render={(props => <NewDogForm {...props} baseURL={baseURL} />)} />
          <Route path="/new/breed" render={(props => <NewBreedForm {...props} baseURL={baseURL} />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;