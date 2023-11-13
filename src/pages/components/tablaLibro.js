import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

export default function TablaLibro() {

    const [libros, setLibros] = useState([])

    const getLibros = async () => {
        const res = await axios.get("../api/getLibros")
    }

    useEffect(() => {
        getLibros()
    }, [])

    return (
        <div>tablaLibro</div>
    )
}
