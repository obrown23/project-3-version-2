import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditFilmmakers from './components/EditFilmmakers';
import FilmmakersList from './components/ListFilmmakers.js';


class App extends Component {
  render(){
  return (
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-name">Filmmakers</Link>
    <Link to="/edit/:id" className="navbar-name">Edit Film Bio</Link>
    <Link to="/create" className="navbar-name">Create Film Bio</Link>
    <div className="collapse nav-collapse">
    <ul className="navbar-nav mr-auto">
    <li className="navbar-item">
<Link to="/" className="nav-link">Filmmakers</Link>
    </li>
    <li className="navbar-item">
<Link to="/" className="nav-link">Add Filmmaker</Link>
    </li>
    </ul>
    </div>
    </nav>
      <h1>Project Reel Exposure App</h1>
      <Route path="/" exact component={FilmmakersList} />
    <Route path="/:id" component={EditFilmmakers} />
    </div>

    </Router>
  );
  }
}

export default App;
