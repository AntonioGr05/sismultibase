// MakePrestamoScreen.js
import React, { useState } from "react";
import UserSearch from "./components/userSearch";
import { Montserrat } from "next/font/google";
import TablaLibro from "./components/tablaLibro";
import MakePrestamoButton from "./components/makePrestamoButton";

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })

function MakePrestamoScreen() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedLibro, setSelectedLibro] = useState(null);

    return (
        <>
            <main className={`p-8 bg-[#03A6A6] h-screen ${montserrat.className} flex items-center flex-col`}>
                <div className="grid justify-items-center"> 
                    <h2 className={`text-6xl text-white ${montserrat.className}`}>Prestamo</h2>
                </div>
                <div className="p-5 mt-[100px] flex place-content-around gap-[60px]">
                    <UserSearch handleUserSelect={setSelectedUser} />
                    <TablaLibro handleLibroSelect={setSelectedLibro} />
                </div>
                <div className="flex justify-items-center flex-col">
                    <MakePrestamoButton selectedUser={selectedUser} selectedLibro={selectedLibro} />
                </div>
            </main>
        </>
    );
}

export default MakePrestamoScreen;
