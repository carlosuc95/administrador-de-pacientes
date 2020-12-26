import React from 'react'
import PropTypes from 'prop-types'

export const Cita = ({cita, eliminarCita}) => {
    return (
        <div className="cita">
            <p>Paciente: <span>{cita.paciente}</span> </p>
            <p>Doctor: <span>{cita.doctor}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Sintomas: <span>{cita.sintomas}</span> </p>

            <button 
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
    )
}

Cita.prototype = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
