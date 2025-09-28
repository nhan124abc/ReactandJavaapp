import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEmployee from "./CreateEmployee";
const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://webtest-8akv.onrender.com/api/employees')
            .then(response => {
                setEmployees(response.data);  // Save the response data to state
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch(error => {
                setError('Error fetching data');  // Handle errors
                setLoading(false);
            });
    }, []);  // The empty array ensures this runs only once, when the component mounts

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4 text-primary">Employee List</h1>
                <div className="table-responsive shadow rounded">
                    <table className="table table-bordered table-hover table-striped align-middle">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((empl) => (
                            <tr key={empl.id}>
                                <td>{empl.id}</td>
                                <td>{empl.name}</td>
                                <td>{empl.email}</td>
                                <td>Delete</td>
                                <td>Edit</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );

};

export default EmployeeList;
