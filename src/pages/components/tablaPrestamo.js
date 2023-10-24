import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function TablaPrestamo() {

    const [prestamos, setPrestamos] = React.useState([])

    const getPrestamos = async () => {
        const res = await axios.get("../api/getPrestamos")
        setPrestamos(res.data.prestamos)
    }

    useEffect(() => {
        getPrestamos()
    }, [])

    return (
        <div>tablaPrestamo</div>

    )
}
