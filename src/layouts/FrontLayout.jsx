import { NavLink, Outlet } from "react-router-dom"

export default function FrontLayout(){

    const routes = [
        { path: "/", name: "首頁" },
        { path: "/products", name: "產品列表" },
        { path: "/cart", name: "購物車" },
    ];


    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container">
                    <ul className="navbar-nav flex-row gap-5 fs-5">
                        {
                            routes.map( (route) => {
                                return (
                                    <li className="nav-item" key={route.path}>
                                        <NavLink to={route.path} className="nav-link" aria-current="page">{route.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <NavLink to='/adminLogin' className="nav-link" aria-current="page">後台登入</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}