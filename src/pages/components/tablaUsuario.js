import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TablaUsuario() {

  const [data, setData] = useState(null)

  const getUsuarios = async () => {
    const res = await axios.get("../api/getUsuarios")
    setData(res.data.usuarios)
  }

  useEffect(() => {
    getUsuarios()
  }, [])

  
  return (
    <div>
        <h2>Tabla Usuarios</h2>
        {data && Object.keys(data).map((key) => (
          <div key={key} className='border-slate-300 border-2 p-1 my-2'>
            <p>Nombre: {data[key].nombre}</p>
            <p>Telefono: {data[key].telefono}</p>
            <p>Email: {data[key].email}</p>
            <p>Colonia: {data[key].colonia}</p>
            <p>Calle: {data[key].calle}</p>
            <p>Numero: {data[key].numero}</p>
            <p>ID: {data[key].id}</p>
          </div>
        ))}
    </div>
  )
}
