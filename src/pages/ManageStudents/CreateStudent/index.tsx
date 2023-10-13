
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, {PureComponent, useEffect, useState} from 'react';

import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface title {
    displayName: string;
}


const CreateStudent = ({ displayName }: title) => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        loadDepartments();
    },[]);
    const loadDepartments = async ()=>{
        const result = await axios.get("http://localhost:8000/api/v1/departments")
        setDepartments(result.data.data);
    }


    const [department, setDepartment] = useState('');
    const [dep, setDep] = useState<number | string>('');



    const [formData, setFormData] = useState({
        address: '',
        birthday: '',
        departmentId: null as null | number, // Ensure departmentId is of type number or null
        fullname: '',
        gender: '',
        mobileNo: '',
        age: '',
        // You may want to generate a unique ID or leave it empty
    });

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const saveStudent = async () => {
        try {
            console.log(formData);
            // Send a POST request to your backend API with formData as the request body
            const result = await axios.post('http://localhost:8000/api/v1/student/create', formData);
            if (result.data.code===201){
                alert("Added Student Successfully!!")
            }else{
                alert("Something went wrong")
            }

        } catch (error) {
            // Handle any error that occurs during the request
            console.error('Error:', error);
        }

    };
    const handleDepChange = (event: SelectChangeEvent) => {
        const selectedDepartmentId = parseInt(event.target.value, 10);
        setDep(selectedDepartmentId);
        setFormData({
            ...formData,
            departmentId: selectedDepartmentId,
        });
    };


    return (
        <div className={"py-12 px-20"}>
            <div>
                <h1>Add Student</h1>
            </div>
        <form  className="mx-auto mt-6 ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="fullname" className="block text-sm  leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            onChange={handleChange}
                            autoComplete="fullname"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="mobileNo" className="block text-sm  leading-6 text-gray-900">
                        Mobile Number
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="number"
                            name="mobileNo"
                            id="mobileNo"
                            onChange={handleChange}
                            autoComplete="mobileNo"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="gender" className="block text-sm  leading-6 text-gray-900">
                        Gender
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="gender"
                            id="gender"
                            onChange={handleChange}
                            autoComplete="gender"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="birthday" className="block text-sm  leading-6 text-gray-900">
                       Birthday
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="date"
                            name="birthday"
                            id="birthday"
                            onChange={handleChange}
                            autoComplete="birthday"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm  leading-6 text-gray-900">
                        Age
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="number"
                            name="age"
                            id="age"
                            onChange={handleChange}
                            autoComplete="family-name"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>



                <div>
                    <label htmlFor="departmentId" className="block text-sm  leading-6 text-gray-900">
                        Department
                    </label>
                    <div className="mt-2.5">
                        <Select
                            labelId="departmentId"
                            id="departmentId"
                            value={String(dep)}
                            onChange={handleDepChange}
                            autoWidth
                            label="jbh"
                        >
                            {departments.map((dept: any) => (
                                <MenuItem key={dept.id} value={dept.id}>
                                    {dept.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm  leading-6 text-gray-900">
                        Address
                    </label>
                    <div className="relative mt-2.5">

                        <input
                            type="text"
                            onChange={handleChange}
                            name="address"
                            id="address"
                            autoComplete="tel"
                            className="block w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


            </div>

        </form>
            <div className="mt-10">
                <button
                    onClick={saveStudent}

                    className="block rounded-md bg-sky-400 px-3.5 py-2.5 text-center text-sm  text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Student
                </button>
            </div>
        </div>
    )
}
export default CreateStudent;
