import React from 'react';
import Header from './componentes/header'
import PaginaPrincipal from './componentes/paginaPrincipal'
import IniciarSesion from './componentes/iniciarSesion/IniciarSesion'
import CrearCuenta from './componentes/iniciarSesion/CrearCuenta'
import Profile from './componentes/perfil/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditProfile from './componentes/editarPerfil';
import { useFirestoreConnect } from 'react-redux-firebase';

function App() {

  useFirestoreConnect(['usuarios'])
  useFirestoreConnect({
    collection: "publicaciones",
    orderBy: ['date', 'desc']
  })


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
        <Route path="/signup">
          <CrearCuenta />
        </Route>
        <Route path="/profile/:userID">
          <Profile />
        </Route>
        <Route path="/editprofile">
          <EditProfile />
        </Route>
      </Router>
    </div >
  );
}

export default App;
