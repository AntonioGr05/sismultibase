// tablaLibro.js
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TablaLibro({ handleLibroSelect }) {
    const [libros, setLibros] = React.useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLibro, setSelectedLibro] = useState(null);

    const getLibros = async () => {
        const res = await axios.get("../api/getLibros")
        setLibros(res.data)
    }

    useEffect(() => {
        getLibros()
    }, [])

    const filteredLibros = libros.filter((libro) =>
        libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLibroSelectLocal = (libro) => {
        handleLibroSelect(libro);
    };

    return (
        <>
            <div className='flex flex-col h-[300px]'>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar por título"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-auto w-[800px]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Titulo Libro
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Autor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Genero
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cantidad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLibros.map((libro, key) => (
                                <tr key={key} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {libro.titulo}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        {libro.autor}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        {libro.genero}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        {libro.cantidad}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        {libro.cantidad > 0 && (
                                            <button
                                                onClick={() => handleLibroSelectLocal(libro)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                                Select
                                            </button>
                                        )} 
                                    </th>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
