import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LeftSideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";


function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <div className={"flex h-full"}>
          <div>
              <LeftSideBar/>
          </div>
          <div className={"w-full h-full"}>
              <div className={"w-full"}>
                  <TopBar/>
              </div>
              <div className={"w-full h-full"}>

                      <Routes>
                          {/*<Route path="/" element={ />} />*/}
                          <Route path="/page-one" element={<PageOne />} />
                          <Route path="/page-two" element={<PageTwo />} />

                      </Routes>


              </div>
          </div>
      </div>

  );
}

export default App;
