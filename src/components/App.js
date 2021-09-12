import '../App.css';
import DogsContainer from './DogsContainer';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={DogsContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;