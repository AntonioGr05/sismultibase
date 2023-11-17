import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Montserrat } from "next/font/google";
import { Inter } from 'next/font/google'
import TABLAPRESTAMOS from '@/pages/components/tablaPrestamo.js'
import flecha from '../../public/flecha.svg'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function tablaPrestamo() {
  return (
    <>
        <main className={`p-8 bg-[#03A6A6] h-screen ${montserrat.className} flex items-center flex-col`}>
            <Link href="/" className={`w-full mb-5`}>
                <Image src={flecha} alt="Flecha" />
            </Link>
            <div className={`h-[90%] w-[75%]`}>
                <TABLAPRESTAMOS/>
            </div>
        </main>
    </>
  )
}
