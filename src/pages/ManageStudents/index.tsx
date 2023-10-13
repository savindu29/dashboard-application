import {NavLink} from "react-router-dom";
import {
  AiOutlinePlus
}from "react-icons/ai";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import {useEffect, useState} from "react";
import { Button } from "@material-tailwind/react";


import React, { PureComponent } from 'react';

import { PieChart, Pie, Sector, Cell ,Tooltip} from "recharts";
import {Box, Stack} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Male', value: 4 },
  { name: 'Female', value: 3 },
];


const data2 = [
  {
    name: 'Page A',

    pv: 12,

  },
  {
    name: 'Page B',

    pv: 5,

  },
  {
    name: 'Page C',

    pv: 10,

  },
  {
    name: 'Page D',

    pv: 7,

  },
  {
    name: 'Page E',

    pv: 3,

  },
  {
    name: 'Page F',

    pv: 1,

  },

];

const COLORS = ['#0088FE', '#00C49F', ];


interface title {
  displayName: string;
}
const TABLE_HEAD = ["Full Name", "Gender", "Address", "Birthday","Mobile Number","Department"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}% `}
      </text>
  );
};


const ManageStudents = ({ displayName }: title) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  },[]);
  const loadStudents = async ()=>{
    const result = await axios.get("http://localhost:8000/api/v1/student")
    setStudents(result.data.data);

  }




    return (


    <>
    <div className={"w-full my-10 px-12"}>
      <div className={" flex justify-end "}>
        <Button className={"bg-white text-sky-950 font-normal mr-4 border-2 rounded px-6 py-2 flex items-center"}>Download Statistics Report</Button>
        <NavLink to={"/manage-students/create"}  className="bg-sky-950 text-white rounded px-6 py-2 flex items-center" > <AiOutlinePlus className={"mr-4"}/>Add Student

        </NavLink>

      </div>
      <div className={"flex mt-4"}>
        <div className={"flex w-full"}>
          <div>
          <h1>Students Departments</h1>

            <div className={"mt-12"}>
              <ResponsiveContainer width={400} height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>

            </div>
          </div>
        </div>
        <div className={"flex w-full"}>
          <div className={"flex justify-center"}>
            <h1>Students Gender</h1>
            <Box >
            <PieChart width={400} height={400} className={""}>
              <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  labelLine={false}
                  fill="#8884d8"

                  dataKey="value"
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip/>
            </PieChart>
              <Stack gap={2}>
                <Typography >Gender</Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {COLORS.map((color, i) => (
                      <Stack key={color} alignItems="center" spacing={1}>
                        <Box sx={{ width: 20, height: 20, background: color }} />
                        <Typography>
                          {data[i]?.name}
                        </Typography>
                      </Stack>
                  ))}
                </Box>
              </Stack>
            </Box>

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
              {students.map(({ student_id,fullname, gender, birthday,address,mobileNo,department }:any, index) => {
                const isLast = index === students.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={student_id}>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {fullname}
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
                          {birthday}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {mobileNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                          {department.name}
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