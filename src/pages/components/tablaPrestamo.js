import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { obtenerDatos } from '../functions/Prestamos';

export default function TablaPrestamo() {

    const [usuarios, setUsuarios] = React.useState([])

    const [datos, setDatos] = React.useState([])

    const getUsuarios = async () => {
        const res = await axios.get("../api/getUsuarios")
        setUsuarios(res.data)
    }
    const obtDatos = () => {
        console.log("obtDatos");
        obtenerDatos().then((res) => {
            setDatos(res);
            console.log(res);
        });
    }
    useEffect(() => {
        getUsuarios()
        obtDatos()
    }, [])

    return (
        <>
            {/* <div>tablaPrestamo</div>
            {prestamos && Object.keys(prestamos).map((key) => (
                <div key={key} className='border-slate-300 border-2 p-1 my-2'>
                    <p>Nombre: {prestamos[key].id_prestamo}</p>
                    <p>Telefono: {prestamos[key].fecha_prestamo}</p>
                    <p>Email: {prestamos[key].fecha_devolucion}</p>
                    <p>Colonia: {prestamos[key].id_libro}</p>
                    <p>Calle: {prestamos[key].id_usuario}</p>
                </div>
            ))} */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titulo Libro
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre Usuario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha prestamo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha entrega
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {datos.prestamos && Object.keys(datos.prestamos).map((key) => (
                        <tr key={key} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {datos.prestamos[key].tituloLibro}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium ">
                                {datos.prestamos[key].nombreUsuario}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium ">
                                {datos.prestamos[key].fecha_prestamo}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium ">
                                {datos.prestamos[key].fecha_devolucion}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium ">
                                Action
                            </th>
                        </tr>
                    ))}
                </tbody>
                </table>  
            </div>
        </>
    )
}
