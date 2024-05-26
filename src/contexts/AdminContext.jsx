import { createContext, useContext } from "react";
import { nanoid } from 'nanoid'

export const AdminContext = createContext ({
    admins : [
        {
            id : nanoid(),
            name : "Abhijeet",
            username : "abhi",
            password : "abhi@123",
        },
        {
            id  : nanoid(),
            name : "Vineet",
            username: "vini",
            password: "vini@123"
        }
    ]
})

export const useAdmin = () => {
    return useContext ( AdminContext)
}

export const AdminProvider = AdminContext.Provider