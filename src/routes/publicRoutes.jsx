
import UserLayout from "../layouts/user/UserLayout";
import LoginAdmin from "../pages/admin/LoginAdmin";
import HomePage from "../pages/user/HomePage";
import ProductPage from "../pages/user/ProductPage";
import RegisterPage from "../pages/user/RegisterPage";


const publicRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "product",
                element: <ProductPage />
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/admin-login",
        element: <LoginAdmin />
    }
];
export default publicRoutes;