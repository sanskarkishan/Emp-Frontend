import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = React.useState({
    id: id,
    name: "",
    phone: "",
    email: "",
    depart: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        console.log("Updated", response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl  bg-slate-700/50 shadow-lg px-6 py-8">
        
        <h1 className="font-bold mb-6 text-white text-2xl text-center">
          Update Employee
        </h1>

        <div className="flex flex-col space-y-4">
          <input
            value={employee.name}
            onChange={handleChange}
            name="name"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Name"
          />
          <input
            value={employee.phone}
            onChange={handleChange}
            name="phone"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Enter Phone"
          />
          <input
            value={employee.email}
            onChange={handleChange}
            name="email"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={employee.depart}
            onChange={handleChange}
            name="depart"
            className="rounded-lg w-full py-2 px-4 text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Department"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mt-8">
          <button
            onClick={updateEmployee}
            className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-6 py-2 hover:bg-green-600 hover:text-white transition"
          >
            UPDATE
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

export default UpdateEmployee;
