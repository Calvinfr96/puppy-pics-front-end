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

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={DogsContainer} />
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