import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDrop({ onSelect }) {
    const [data, setData] = useState(null);

    const getUsuarios = async () => {
        const res = await axios.get("../api/getUsuarios");
        console.log("Server Response:", res.data); // Agrega esta línea
        setData(res.data.usuarios);
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    const handleUserChange = (event) => {
        const selectedUserId = event.target.value;
        const selectedUser = data[selectedUserId];
        console.log("Selected User:", selectedUser); // Agrega esta línea
        onSelect(selectedUser);
    };

    return (
        <div>
            <h2>Select user</h2>
            <select onChange={handleUserChange}>
                <option value="test">Select a user</option>
                {data && Object.keys(data).map((key) => (
                    <option key={key} value={data[key].id}>{data[key].nombre} - {data[key].id}</option>
                ))}
            </select>
        </div>
    )
}
