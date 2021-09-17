import '../App.css';
import DogsContainer from './DogsContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import NewUserFrom from './NewUserFrom';
import NewBreedForm from './NewBreedForm';
import NewDogForm from './NewDogForm';
import BreedPage from './BreedPage';
import UserPage from './UserPage';
import BreedDetail from './BreedDetail';
import UserDetail from './UserDetail';
import { useState } from 'react';
import LogInPage from './LogInPage';

function App() {
  const [user, setUser] = useState("User1")
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact render={(props) => <DogsContainer {...props} user={user} />} />
          <Route path="/login" exact render={(props) => <LogInPage {...props} setUser={setUser} />} />
          <Route path="/breeds" exact component={BreedPage} />
          <Route path="/breeds/:id" component={BreedDetail} />
          <Route path="/users" exact component={UserPage} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/new/user" component={NewUserFrom} />
          <Route path="/new/dog" component={NewDogForm} />
          <Route path="/new/breed" component={NewBreedForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;