import React, { useState } from "react";
import UserSearch from "./components/userSearch";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })

export default function PrestamoScreen() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
            <main className={`p-8 bg-[#03A6A6] h-screen ${montserrat.className}`}>
                <div className="grid justify-items-center"> 
                    <h2 className={`text-6xl text-white ${montserrat.className}`}>Prestamo</h2>
                </div>
                <div className="p-5 mt-[100px] flex justify-center">
                    <UserSearch/>
                    {/* Agregar el componente de los libros */}
                </div>
            </main>
        </>
    );
}
