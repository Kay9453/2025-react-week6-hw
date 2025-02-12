import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminLogin from "../pages/AdminLogin";
import NotFound from "../pages/NotFound";
import ProductDetailPage from "../pages/ProductDetailPage";

const routes = [
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
            {
                path: 'adminLogin',
                element: <AdminLogin />
            }
        ]
    },{
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <AdminOrders />
            },
            {
                path: 'orders',
                element: <AdminOrders />
            },
            {
                path: 'products',
                element: <AdminProducts />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]

const router = createHashRouter(routes);

export default router;