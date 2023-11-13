import React from "react";

export default function MakePrestamoButton({ selectedUser }) {
    function makePrestamo() {
        if (selectedUser) {
            const userName = selectedUser.nombre;
            alert(`Prestamo Realizado para ${userName}`);
        }
    }

    return (
        <>
            <button
                onClick={makePrestamo}
                className="bg-white text-black font-bold py-2 px-4 rounded-lg"
                disabled={!selectedUser}
            >
                Prestamo
            </button>
        </>
    );
}
