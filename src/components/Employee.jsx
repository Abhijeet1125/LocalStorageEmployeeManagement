import { EmployeeProvider, useEmployee } from "../contexts"
import Header from "./Header"

function Employee() {

    const { EmployeeList, addEmployee, RemoveEmployee } = useEmployee()


    return (
        <EmployeeProvider value={{ EmployeeList, addEmployee, RemoveEmployee }}>
            <Header></Header>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Employee List</h1>




                    <div className="container max-w-4xl px-4 mx-auto sm:px-8">
                        <div className="py-8">
                            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Role
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Salary
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Experience
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Location
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Edit
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                EmployeeList.map((employee) => (
                                                    <tr key={employee.id}>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        {employee.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {employee.role}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {employee.salary}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {employee.experience} years
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {employee.workingLocation}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                                </span>
                                                                <span className="relative">
                                                                    <button>Edit</button>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                                </span>
                                                                <span className="relative">
                                                                    <button>Delete</button>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))

                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </EmployeeProvider>)
}
export default Employee