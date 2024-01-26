import SideBar from "@/pages/admin/SideBar";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div className="grid grid-cols-12">
            {/* <h1>AdminLayout</h1> */}
            <SideBar></SideBar>
            <div className="col-span-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;