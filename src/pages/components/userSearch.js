import React, { useState, useEffect } from "react";
import MakePrestamoButton from "./makePrestamoButton";
import axios from "axios";

export default function UserSearch() {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsuarios = async () => {
        const res = await axios.get(`/api/getUsuarios?searchTerm=${searchTerm}`);
        setData(res.data.usuarios);
    };

    useEffect(() => {
        getUsuarios();
    }, [searchTerm]);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="gap-3">
            <input
                type="text"
                placeholder="Search for a user"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 bg-white rounded-lg"
            />
            {data &&
                Object.keys(data).map((key) => {
                    const user = data[key];
                    if (user.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return (
                            <div key={key} onClick={() => handleUserSelect(user)}>
                                <p>{user.nombre} - {user.id}</p>
                            </div>
                        );
                    }
                    return null; // No muestra usuarios que no coincidan
                })}
            {selectedUser && (
                <p>User Selected: {selectedUser.nombre}</p>
            )}
            <MakePrestamoButton selectedUser={selectedUser} />
        </div>
    );
}
