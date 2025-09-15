import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/employees')
            .then(response => {
                setEmployees(response.data);  // Save the response data to state
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch(error => {
                setError('Error fetching data');  // Handle errors
                setLoading(false);
            });
    }, []);  // The empty array ensures this runs only once, when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
