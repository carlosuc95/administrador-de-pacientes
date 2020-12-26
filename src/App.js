import React, { useEffect, useState } from 'react'
import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';
import PropTypes from 'prop-types'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = []
  } 

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    
    localStorage.setItem('citas', JSON.stringify(citas));

  }, [citas])

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = (id) => {
    setCitas(citas.filter( cita => cita.id !== id));
  } 

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
          { citas.length ? <h2>Administrar Citas</h2> : <h2>Agrega una Cita</h2>}
            {citas.map( cita => (
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

Formulario.prototype = {
  crearCita: PropTypes.func.isRequired 
}

export default App;
