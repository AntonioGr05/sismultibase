// makePrestamoButton.js
import React from "react";
import axios from "axios";
const MakePrestamoButton = ({ selectedUser, selectedLibro }) => {
    const handleClick = async () => {
        let id_Libro = selectedLibro.id_libro;
        let id_Usuario = selectedUser.id_usuario;

        const prestamoData = {
            id_libro: id_Libro,
            id_usuario: id_Usuario
        }

        try {
            const response = await axios.post('../api/postPrestamo', prestamoData);
            alert(response.data[0].mensaje);
            window.location.reload();
        } catch (error) {
            console.error('Error realizando el préstamo:', error);
        }
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
