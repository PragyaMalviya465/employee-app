import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import EmployeeServices from '../services/EmployeeServices'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])
  
   useEffect(()=>{
    getAllEmployees();
   },[])

   const getAllEmployees =()=>{
    EmployeeServices.getAllEmployees().then((res)=>{
      setEmployees(res.data)
      // console.log(res.data)
    }).catch(error =>{
      console.log(error);
    })
   }
   
   const deleteEmployee = (employeeId) =>{
      EmployeeServices.deleteEmployee(employeeId).then((res)=>{
        getAllEmployees();
      }).catch(err =>{
        console.log(err)
      })
   }

  return (
    <div className='container'>
        <h2 className='text-center p-2'>List Employees</h2>

        <Link to="/add-employee" className="btn btn-primary nb-2"> Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id </th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                              <Link className='btn btn-info ' to={`/edit-employee/${employee.id}`}>Update</Link>
                              <button className='btn btn-danger m-2' onClick={()=>deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

// '/edit-employee/${employee.id}'