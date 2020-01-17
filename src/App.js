import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Marca } from './marcas/marca.component';
import { AddMarca } from './marcas/addmarca.component'
import  { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/marcas' component={Marca} />
                <PrivateRoute exact path='/agregar-marca' component={AddMarca} />
                <PrivateRoute exact path='/editar-marca/:id' component={AddMarca} />
                <Route exact path='/' component={Login} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
