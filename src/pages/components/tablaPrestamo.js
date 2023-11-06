import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function TablaPrestamo() {

    const [prestamos, setPrestamos] = React.useState([])

    const getPrestamos = async () => {
        const res = await axios.get("../api/getPrestamos")
        setPrestamos(res.data)
    }

    useEffect(() => {
        getPrestamos()
    }, [])

    return (
        <>
            <div>tablaPrestamo</div>
            {prestamos && Object.keys(prestamos).map((key) => (
                <div key={key} className='border-slate-300 border-2 p-1 my-2'>
                    <p>Nombre: {prestamos[key].id_prestamo}</p>
                    <p>Telefono: {prestamos[key].fecha_prestamo}</p>
                    <p>Email: {prestamos[key].fecha_devolucion}</p>
                    <p>Colonia: {prestamos[key].id_libro}</p>
                    <p>Calle: {prestamos[key].id_usuario}</p>
                </div>
            ))}
        </>
        
    )
}
