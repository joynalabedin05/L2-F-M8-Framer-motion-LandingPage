import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-3 md:p-5">
           
            <nav className="flex flex-col gap-3">
                <NavLink className={({isActive})=>cn('p-3 bg-gray hover:bg-dark-gray hover:text-white rounded-md transition-all flex justify-center items-center gap-2', {
                    "bg-dark-gray text-white": isActive
                })} to='/admin/dashboard'> 
                <LayoutDashboard className="shrink-0"></LayoutDashboard> 
                <span className="truncate">Dashboard</span>
                </NavLink>
                <NavLink className={({isActive})=>cn('p-3 bg-gray hover:bg-dark-gray hover:text-white rounded-md transition-all flex justify-center items-center gap-2', {
                    "bg-dark-gray text-white": isActive
                })} to='/admin/add-service'> 
                <LayoutDashboard className="shrink-0"></LayoutDashboard> 
                <span className="truncate">Add Service</span>
                </NavLink>
                <NavLink className={({isActive})=>cn('p-3 bg-gray hover:bg-dark-gray hover:text-white rounded-md transition-all flex justify-center items-center gap-2', {
                    "bg-dark-gray text-white": isActive
                })} to='/admin/service-list'> 
                <LayoutDashboard className="shrink-0"></LayoutDashboard> 
                <span className="truncate">Service list</span>
                </NavLink>
                
            </nav>
        </aside>
    );
};

export default SideBar;