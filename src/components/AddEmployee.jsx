import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    phone: "",
    email: "",
    depart: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log("Saved:", response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl shadow-lg px-6 py-8 bg-slate-700/50 backdrop-blur-sm">
        
        <h1 className="font-bold mb-6 text-white text-2xl text-center">
          Add Employee
        </h1>

        <div className="flex flex-col space-y-4">
          <input
            value={employee.name}
            onChange={handleChange}
            name="name"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter Name"
          />
          <input
            value={employee.phone}
            onChange={handleChange}
            name="phone"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Enter Phone"
          />
          <input
            value={employee.email}
            onChange={handleChange}
            name="email"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={employee.depart}
            onChange={handleChange}
            name="depart"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter Department"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mt-8">
          <button
            onClick={saveEmployee}
            className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-6 py-2 hover:bg-green-600 hover:text-white transition"
          >
            SAVE
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-6 py-2 hover:bg-red-600 hover:text-white transition"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
