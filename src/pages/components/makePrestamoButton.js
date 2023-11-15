// makePrestamoButton.js
import React from "react";

const MakePrestamoButton = ({ selectedUser, selectedLibro }) => {
    const handleClick = () => {
        // Acceder al valor del usuario seleccionado y del libro seleccionado directamente desde las props
        console.log("Usuario seleccionado:", selectedUser);
        console.log("Libro seleccionado:", selectedLibro);

        // Puedes realizar otras acciones con los valores seleccionados aquí
    };

    const isButtonDisabled = !selectedUser || !selectedLibro;

    return (
        <>
            {selectedUser && (
                <p>Usuario seleccionado: {selectedUser.nombre}</p>
            )}
            {selectedLibro && (
                <p>Libro seleccionado: {selectedLibro.titulo}</p>
            )}
            <button
                onClick={handleClick}
                className={`py-2 px-4 rounded cursor-pointer mt-4 ${isButtonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-700 text-white"}`}
                disabled={isButtonDisabled}
            >
                Make Prestamo
            </button>
        </>
    );
};

export default MakePrestamoButton;
