import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/category/Category";

const priveRoutes = [
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "category",
                element: <Category />
            }
        ]
    }
];
export default priveRoutes;