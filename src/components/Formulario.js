import React, { useState } from 'react'
import {  v4 as uuidv4 } from "uuid";

export const Formulario = ({crearCita}) => {
    
    const initialState = {
        paciente: '',
        doctor: '',
        fecha: '',
        hora: '',
        sintomas: '',
    }
    const [cita, setCita] = useState(initialState)

    const [error, setError] = useState(false);

    const handleInputChange =  ({target}) => {

        setCita({
            ...cita,
            [target.name]: target.value
        })
    }

    const {paciente,doctor,fecha,hora,sintomas} = cita;
    
    const submitCita = e => {
        e.preventDefault();

        if( paciente.trim() === "" || doctor.trim() === "" || fecha.trim() === "" || 
        hora.trim() === "" || sintomas.trim() === "" ){

            setError(true);
            return;
        }

        setError(false);

        cita.id = uuidv4();

        crearCita(cita);

        setCita(initialState);
        
    }

    return (
        <>
          <h2>Crear cita</h2>
          {error && <p className="alerta-error">Todos los campos son obligatorios</p>}
          <form onSubmit={submitCita}>  
            <label>Nombre Paciente</label>
            <input 
                type="text"
                name="paciente"
                onChange={handleInputChange}
                value={paciente}
                className="u-full-width"
                placeholder="Nombre Paciente"


            />
            <label>Nombre Doctor</label>
            <input 
                type="text"
                name="doctor"
                onChange={handleInputChange}
                value={doctor}
                className="u-full-width"
                placeholder="Nombre Doctor"
            />
            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                onChange={handleInputChange}
                value={fecha}
                className="u-full-width"
            />
            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                onChange={handleInputChange}
                value={hora}
                className="u-full-width"
            />
            <label>Síntomas</label>
            <textarea 
                type="text"
                name="sintomas"
                onChange={handleInputChange}
                value={sintomas}
                className="u-full-width"
            />
            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar cita
            </button>

          </form>

        </>
    )
}
