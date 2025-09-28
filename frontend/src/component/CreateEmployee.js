import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CreateEmployee(){
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    function HandleSave(){

    }
    const addemployee= async (e)=>{

        const employeedata={name,email}
        try{
            const response=await fetch("https://webtest-8akv.onrender.com/api/employees/add",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/Json"},
                    body:JSON.stringify(employeedata)

                })
        }catch (error){

        }
    }
    function HandleCancel(){
        setId("");
        setEmail("")
        setName("")
    }
    return(
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow rounded">
                            <div className="card-body">
                                <h2 className="text-center text-primary mb-4">Add Employee</h2>
                                <form onSubmit={addemployee}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success w-100">
                                        Add Employee
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
