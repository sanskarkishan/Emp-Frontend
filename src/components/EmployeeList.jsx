import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prev) =>
          prev.filter((employee) => employee.id !== id)
        );
      }
    });
  };

  const updateEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  };

  return (
    <div className="p-4">
      {/* Add Employee Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-900 hover:bg-blue-800 text-white px-6 sm:px-10 py-2 text-sm sm:text-base font-semibold rounded-lg shadow transition"
        >
          Add Employee
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px] sm:min-w-full shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm sm:text-base sticky top-0">
              <tr>
                <th className="px-4 py-3 text-center">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3 text-center">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3 text-center">Department</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            {loading ? (
              <tbody>
                <tr>
                  <td colSpan={6} className="text-center py-8">
                    <p className="text-lg sm:text-xl font-bold">Loading...</p>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="text-sm sm:text-base">
                {employees && employees.length > 0 ? (
                  employees.map((employee, idx) => (
                    <tr
                      key={employee.id}
                      className={`transition hover:bg-blue-100 ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="text-center py-3 px-4">{employee.id}</td>
                      <td className="py-3 px-4">{employee.name}</td>
                      <td className="text-center py-3 px-4">{employee.phone}</td>
                      <td className="py-3 px-4">{employee.email}</td>
                      <td className="text-center py-3 px-4">{employee.depart}</td>
                      <td className="text-center py-3 px-4 space-x-2">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 transition"
                          onClick={(e) => deleteEmployee(e, employee.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 transition"
                          onClick={(e) => updateEmployee(e, employee.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-8">
                      <p className="text-gray-500 font-medium">
                        No employees found.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
