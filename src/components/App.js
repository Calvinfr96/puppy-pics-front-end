import '../App.css';
import DogsContainer from './DogsContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import NewUserFrom from './NewUserFrom';
import NewBreedForm from './NewBreedForm';
import NewDogForm from './NewDogForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={DogsContainer} />
          <Route path="/new/user" component={NewUserFrom} />
          <Route path="/new/dog" component={NewDogForm} />
          <Route path="/new/breed" component={NewBreedForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;