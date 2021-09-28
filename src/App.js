
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Slider from './components/Slider';
import UserList from './components/UserList.js';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/admin">
            <Admin dataProvider={restProvider('http://localhost:3000')}>
              <Resource name='User' list={UserList} create={UserCreate} edit={UserEdit}/>
              <Resource name='Categorie' list={UserList} create={UserCreate} edit={UserEdit}/>
            </Admin>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Slider />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
