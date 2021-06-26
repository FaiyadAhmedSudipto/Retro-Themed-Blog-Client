import React from 'react';
import "./AdminHome.css"
import realAdminBg from "../../../images/realAdminBg.png"

const RealAdminHome = () => {
    return (
        <div className="adminHomePage">
            <div className="text-center">
                <h3>Welcome to Admin Panel</h3>
                <h4>Add New Blogs And Manage Them</h4>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={realAdminBg} alt="" />
                {/* Login Image Link __  */}
            </div>
        </div>
    );
};

export default RealAdminHome;