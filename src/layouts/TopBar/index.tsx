import React from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const TopBar = () => {
    return (
        <div>
            <div className={"flex  w-full text-white bg-gray-700"}>
                <div className={"w-full flex "}>

                    <div className={"py-2 text-black"}>
                        <input type="search" className={"bg-gray-300 rounded  py-2 px-4 focus:outline-none"} placeholder={"Search"}/>
                    </div>
                </div>
                <div className={"w-full"}>
                    right
                </div>

            </div>
        </div>
    );
};

export default TopBar;