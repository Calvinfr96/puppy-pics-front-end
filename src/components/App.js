import '../App.css';
import DogsContainer from './DogsContainer';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Route path="/home" component={DogsContainer} />
      </div>
    </Router>
  );
}

export default App;