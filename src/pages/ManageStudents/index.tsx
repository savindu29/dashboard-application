import {NavLink} from "react-router-dom";
import {
  AiOutlinePlus
}from "react-icons/ai";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import {useEffect, useState} from "react";


import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Male', value: 5 },
  { name: 'Female', value: 6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


interface title {
  displayName: string;
}
const TABLE_HEAD = ["Full Name", "Gender", "Address", "Birthday","Mobile Number","Department"];

const students = [
  {
    property_id: 1,
    full_name: "John Doe",
    gender: "Male",
    birthday: "1990-05-15",
    address: "123 Main St",
    department: "Computer Science",
    mobile_no: "123-456-7890",
  },
  {
    property_id: 2,
    full_name: "Jane Smith",
    gender: "Female",
    birthday: "1995-08-22",
    address: "456 Elm St",
    department: "Electrical Engineering",
    mobile_no: "987-654-3210",
  },
  {
    property_id: 3,
    full_name: "Michael Johnson",
    gender: "Male",
    birthday: "1998-03-10",
    address: "789 Oak St",
    department: "Mechanical Engineering",
    mobile_no: "555-123-4567",
  },
  {
    property_id: 4,
    full_name: "Sarah Wilson",
    gender: "Female",
    birthday: "1993-12-05",
    address: "567 Pine St",
    department: "Biology",
    mobile_no: "777-888-9999",
  },
  {
    property_id: 5,
    full_name: "David Brown",
    gender: "Male",
    birthday: "1996-07-20",
    address: "345 Cedar St",
    department: "Mathematics",
    mobile_no: "321-654-9876",
  },
  {
    property_id: 6,
    full_name: "Emily Taylor",
    gender: "Female",
    birthday: "1997-02-18",
    address: "890 Birch St",
    department: "History",
    mobile_no: "555-333-7777",
  },
  {
    property_id: 7,
    full_name: "William Anderson",
    gender: "Male",
    birthday: "1994-11-30",
    address: "432 Willow St",
    department: "Physics",
    mobile_no: "999-111-2222",
  },

];



const ManageStudents = ({ displayName }: title) => {
  // const [students, setStudents] = useState([]);
  // useEffect(() => {
  //   loadStudents();
  // },[]);
  // const loadStudents = async ()=>{
  //   const result = await axios.get("http://localhost:8000/api/v1/student")
  //   setStudents(result.data);
  // }
  return (
    <>
    <div className={"w-full my-10 px-12"}>
      <div className={" flex justify-end "}>
        <NavLink to={"/manage-students/create"}  className="bg-sky-950 text-white rounded px-6 py-2 flex items-center" > <AiOutlinePlus className={"mr-4"}/>Add Student

        </NavLink>

      </div>
      <div className={"flex mt-4"}>
        <div className={"flex w-full"}>
          <div>
          <h1>Recently Added Students</h1>
          </div>
        </div>
        <div className={"flex w-full"}>
          <div className={"flex justify-center"}>
            <h1>Chart</h1>
            <PieChart width={400} height={400} >
              <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            </PieChart>
          </div>
        </div>
      </div>

      <div>
        <div>All Students</div>








        <div>

          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {students.map(({ property_id,full_name, gender, birthday,address,department,mobile_no }, index) => {
                const isLast = index === students.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={property_id}>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {property_id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {full_name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {mobile_no}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {department}
                        </Typography>
                      </td> <td className={classes}>
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                      >
                        {birthday}
                      </Typography>
                    </td>
                      {/*<td className={classes}>*/}
                      {/*  <Typography*/}
                      {/*      as="a"*/}
                      {/*      href="#"*/}
                      {/*      variant="small"*/}
                      {/*      color="blue-gray"*/}
                      {/*      className="font-medium"*/}
                      {/*  >*/}
                      {/*    Edit*/}
                      {/*  </Typography>*/}
                      {/*</td>*/}
                    </tr>
                );
              })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageStudents;