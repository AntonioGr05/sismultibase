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
    console.log(data);
  }, [])

  
  return (
    <div>
        <h2>Tabla Usuarios</h2>
    </div>
  )
}
