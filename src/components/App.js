import '../App.css';
import DogsContainer from './DogsContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import NewUserFrom from './NewUserFrom';
import NewBreedForm from './NewBreedForm';
import NewDogForm from './NewDogForm';
import BreedPage from './BreedPage';
import UserPage from './UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={DogsContainer} />
          <Route path="/breeds" component={BreedPage} />
          <Route path="/users" component={UserPage} />
          <Route path="/new/user" component={NewUserFrom} />
          <Route path="/new/dog" component={NewDogForm} />
          <Route path="/new/breed" component={NewBreedForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;