// userSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserSearch({ handleUserSelect }) {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsuarios = async () => {
        const res = await axios.get(`/api/getUsuarios`);
        setData(res.data.usuarios);
        setFilteredData(res.data.usuarios); // Set filteredData initially with all users
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    useEffect(() => {
        // Filter data when searchTerm changes
        if (data) {
            const filtered = Object.keys(data).filter((key) =>
                data[key].nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered.reduce((obj, key) => {
                obj[key] = data[key];
                return obj;
            }, {}));
        }
    }, [searchTerm, data]);

    const handleUserSelectLocal = (user) => {
        handleUserSelect(user);
    };

    return (
        <div className="flex flex-col h-[300px]">
            <input
                type="text"
                placeholder="Buscar usuario"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded-md"
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto mt-4 h-auto w-[300px]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData &&
                            Object.keys(filteredData).map((key) => {
                                const user = filteredData[key];

                                return (
                                    <tr key={key} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.nombre}
                                        </td>
                                        <td className="px-6 py-4 font-medium">
                                            <button
                                                onClick={() => handleUserSelectLocal(user)}
                                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer`}
                                            >
                                                Select
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            {selectedUser &&(
                <p>Selected user: {selectedUser.id_usuario}</p>
            )}
        </div>
    );
}
