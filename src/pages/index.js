import Image from 'next/image'
import { Inter } from 'next/font/google'
import TABLAPRESTAMOS from '@/pages/components/tablaPrestamo.js'
import { Montserrat } from "next/font/google";
import Link from 'next/link'
const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`p-8 bg-[#03A6A6] h-screen ${montserrat.className} flex items-center flex-col`}>
        <div className={`mb-20 mt-10`}>
          <h1 className={`text-white text-5xl font-bold text-center`}>SISTEMA ADMINISTRACION <br /> BLIBLIOTECA</h1>
        </div>
        <div className={`border-black flex flex-row w-2/3 mt-20 justify-between	`}>
          <Link href="/makePrestamoScreen" className={`bg-white h-16 w-52 text-center align-middle content-center rounded-md drop-shadow-md`}>
                <p className={`align-middle h-full mt-5`}>Registrar Prestamo</p>
          </Link>
          <Link href="/tablaPrestamo" className={`bg-white h-16 w-52 text-center align-middle content-center rounded-md drop-shadow-md`}>
                <p className={`align-middle h-full mt-5`}>Ver tabla prestamo</p>
          </Link>
        </div>
      </main>
    </>
  )
}
