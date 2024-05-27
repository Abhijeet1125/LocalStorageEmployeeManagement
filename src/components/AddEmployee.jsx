import React from "react";
import { useEmployee } from "../contexts";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

    const navi = useNavigate ();
    const { addEmploye , employeeList} = useEmployee();

    const handlesubmit = (event) => {
        event.preventDefault();
    
        const emp = {
            name : event.target.elements.name.value,
            role : event.target.elements.role.value,
            salary : event.target.elements.salary.value,
            experience : event.target.elements.experience.value,
            workingLocation : event.target.elements.location.value,
        }
        addEmploye (emp )
        console.log ( employeeList)
        navi("../employee")
    };

    return (
        <>
            <form  onSubmit={handlesubmit } >
            <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">                        
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                                Add a new employee
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className="relative">
                                    <input type="text" name="name" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative">
                                    <input type="text" name = "role" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Role" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative">
                                    <input type="number" name="salary" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Salary in INR" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative">
                                    <input type="number" name="experience" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Experience in years" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative">
                                    <input type="text" name = "location" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Working location" />
                                </div>
                            </div>
                            
                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button  type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                        Add
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}

export default AddEmployee;