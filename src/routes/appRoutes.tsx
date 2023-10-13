// routesConfig.tsx

import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ManageStudents from "../pages/ManageStudents";
import CreateStudent from "../pages/ManageStudents/CreateStudent";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import ManageLectures from "../pages/ManageLectures";
import CreateLectures from "../pages/ManageLectures/CreateLectures";

const appRoutes: RouteType[] = [


    {
        path: "/manage-lectures",
        element: <ManageLectures displayName="Lectures" />,
        state: "manage-lectures",
        sidebarProps: {
            displayText: "Lectures",
            icon: <FaUserGraduate />
        },
        child: [
            {
                index: true,
                element: <ManageLectures displayName="Lectures" />,
                state: "dashboard.index"
            },

            {
                path: "/manage-lectures",
                element: <ManageLectures displayName="Manage Lectures" />,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Manage Lectures"
                },

            }
        ]
    },


    {
        path: "/manage-students",
        element: <ManageStudents displayName="Students" />,
        state: "manage-students",
        sidebarProps: {
            displayText: "Student",
            icon: <FaUserGroup />
        },
        child: [
            {
                index: true,
                element: <ManageStudents displayName="Manage Students" />,
                state: "dashboard.index"
            },

            {
                path: "/manage-students",
                element: <CreateStudent displayName="Manage Students" />,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Manage Student"
                },

            }
        ]
    },


];

export default appRoutes;
