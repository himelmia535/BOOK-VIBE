import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            {/* <h1>Main Layout is this</h1> */}
            <div className="h-24">
                <Nav></Nav>
            </div>
   
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;