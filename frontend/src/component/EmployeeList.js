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
        <div className='container'>
            <h1 className='text-center'>Employee List</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                </thead>
                <tbody>
                    {employees.map( (empl)=>

                            <tr key={empl.id}>
                                <td>{empl.id}</td>
                                <td>{empl.name}</td>
                                <td>{empl.email}</td>
                            </tr>

                    )}
                </tbody>
            </table>
        </div>

        </>
    );

};

export default EmployeeList;
