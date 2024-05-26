import { createContext, useContext } from "react";
import { nanoid } from 'nanoid'

export const EmployeeContext = createContext ({
    EmployeeList  : [
        {
            id : nanoid(),
            name : "Abhijeet",
            username : "abhi",
            password : "abhi@123",
            salary : 3500000,
            experience : 5 ,
            role : "SDE",
            workingLocation : "Noida" 
        },
        {
            id : nanoid(),
            name : "Aniket",
            username : "sub",
            password : "su@123",
            salary : 2800000,
            experience : 5 ,
            role : "SDE",
            workingLocation : "Noida" 
        },
        {
            id : nanoid(),
            name : "Rishi",
            username : "rishi",
            password : "rishi@123",
            salary : 4500000,
            experience : 7 ,
            role : "SDE",
            workingLocation : "Banglore", 
        },
        {
            id : nanoid(),
            name : "Anil",
            username : "anil",
            password : "anil@123",
            salary : 2000000,
            experience : 2 ,
            role : "Testing",
            workingLocation : "Pune" 
        },
        {
            id : nanoid(),
            name : "Rajesh",
            username : "Rajesh",
            password : "rajesh@123",
            salary : 2500000,
            experience : 4 ,
            role : "Java Developer",
            workingLocation : "Banglore" 
        },
        {
            id : nanoid(),
            name : "Abhiraj",
            username : "abhiraj",
            password : "abhiraj@123",
            salary : 2400000,
            experience : 3 ,
            role : "Java developer",
            workingLocation : "Noida" 
        },
    ],
    addEmployee ( employ ) {},
    RemoveEmployee ( id ){},
})

export const useEmployee = () => {
    return useContext ( EmployeeContext)
}

export const EmployeeProvider = EmployeeContext.Provider