import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div className="layout-auth">
            <div>
                <h1>Auth Layout</h1>
            </div>
            <div className="layout-auth__content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;