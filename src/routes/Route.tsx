// import App from "@/App";
import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddServices from "@/pages/admin/AddServices";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";


const router  = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                // path:'/',
                index: true,
                element: <Home></Home>,
            },
            {
                path:'about',
                element: <About></About>,
            },
        ]
    },
    {
        path:'/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <Navigate to='/admin/dashboard'></Navigate>
            },
            {
                path:'dashboard', 
                // index: true,              
                element: <Dashboard></Dashboard>,
            },
            {
                path:'add-service',
                element: <AddServices></AddServices>,
            },
            {
                path:'service-list',
                element: <ServiceList></ServiceList>,
            },
        ]
    },
]);

export default router;