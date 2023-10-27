import Image from 'next/image'
import { Inter } from 'next/font/google'
import TABLAUSUARIOS from '@/pages/components/tablaUsuario.js'
/* import TABLAPRESTAMOS from '@/pages/components/tablaPrestamo.js' */
/*import { obtenerLibros } from '../../controller/libros'*/

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='p-8'>
        <h2 className='font-sans text-2xl font-medium'>Conexion Con Firebase</h2>
        <TABLAUSUARIOS/>
        <h2 className='font-sans text-2xl font-medium'>Conexion Con postgrest</h2>
        {/* <TABLAPRESTAMOS/> */}
      </main>
    </>
  )
}
