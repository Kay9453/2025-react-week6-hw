import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout(){
    return (
        <>
            <div className="container-fluid d-flex">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid flex-column justify-content-start">
                        <NavLink to='/admin/orders' className="nav-link fs-2">LOGO</NavLink>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column justify-content-start">
                                <li className="nav-item">
                                    <NavLink to='/admin/orders' className="nav-link">訂單列表</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/admin/products' className="nav-link">產品設定列表</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}