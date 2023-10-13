import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import appRoutes from "./routes/appRoutes";
import CreateLectures from "./pages/ManageLectures/CreateLectures";
import CreateStudent from "./pages/ManageStudents/CreateStudent";
import ManageStudents from "./pages/ManageStudents";
import ManageLectures from "./pages/ManageLectures";

function App() {
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <div className={"flex h-full"}>
            <div>
                <LeftSideBar />
            </div>
            <div className={"w-full h-full"}>
                <div className={"w-full"}>
                    <TopBar />
                </div>
                <div className={"w-full h-full"}>
                    <Routes>
                        <Route path={"/manage-students"} element={<ManageStudents displayName={"Manage Students"}/>}/>
                        <Route path={"/manage-students/create"} element={<CreateStudent displayName={"Add Students"}/>}/>
                        <Route path={"/manage-lectures"} element={<ManageLectures displayName={"Manage Lectures"}/>}/>
                        <Route path={"/manage-lectures/create"} element={<CreateLectures displayName={"Add Lectures"}/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
