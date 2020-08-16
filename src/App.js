import React from 'react';
import Header from './componentes/header'
import PaginaPrincipal from './componentes/paginaPrincipal'

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: 'gray'}}>
        <Header />
        <PaginaPrincipal />
      </div>
    </div>
  );
}

export default App;
