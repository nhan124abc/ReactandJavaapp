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
            <div className='container mb-5 '>
                <h1 className='text-center'>Add Employee</h1>
            <form onSubmit={addemployee} >

                <input value={name} onChange={(e) => setName(e.target.value)} required/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <button type='submit'> Add Employee</button>


            </form>
            </div>
        </>
    )

}
