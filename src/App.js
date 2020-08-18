import React from 'react';
import Header from './componentes/header'
import PaginaPrincipal from './componentes/paginaPrincipal'
import IniciarSesion from './componentes/iniciarSesion/Index'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App" style={{ backgroundColor: 'gray' }}>
      <Router>
        <Header />
        <Route exact path="/">
          <PaginaPrincipal />
        </Route>
        <Route path="/signin">
          <IniciarSesion />
        </Route>
      </Router>
    </div >
  );
}

export default App;
