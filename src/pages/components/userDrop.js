import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDrop() {
    const [data, setData] = useState(null);

    const getUsuarios = async () => {
        const res = await axios.get("../api/getUsuarios");
        setData(res.data.usuarios);
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <div>
            <h2>Select user</h2>
            <select>
                <option value="test">Select a user</option>
                {data && Object.keys(data).map((key) => (
                    <option key={key} value={data[key].id}>{data[key].nombre} - {data[key].id}</option>
                ))}
            </select>
        </div>
    )
}



