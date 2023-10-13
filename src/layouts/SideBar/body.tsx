import React from "react";
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
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import appRoutes from "../../routes/appRoutes";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";

const SideBarMenu =()=>{
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value:any) => {
        setOpen(open === value ? 0 : value);
    };
    return(
        <>
            <div className={"w-full my-4"}>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse item={route} key={index} />
                        ) : (
                            <SidebarItem item={route} key={index} />
                        )
                    ) : null
                ))}

            </div>
        </>
    )
}
export default SideBarMenu;