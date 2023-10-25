import React, { useState } from "react";
import UserDrop from "@/pages/components/userDrop.js";

export default function PrestamoScreen() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
            <main className="p-8">
                <h2 className="font-sans text-2xl font-medium">Prestamo</h2>
                <UserDrop onSelect={handleUserSelect} />
                <p>Selected user: {selectedUser ? `${selectedUser.nombre} - ${selectedUser.id}` : "None selected"}</p>
            </main>
        </>
    );
}
