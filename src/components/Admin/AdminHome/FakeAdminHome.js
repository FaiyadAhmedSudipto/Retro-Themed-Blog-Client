import React from 'react';
import "./AdminHome.css"
import fakeAdminBg from "../../../images/fakeAdminBg.png"

const FakeAdminHome = () => {
    return (
        <div className="adminHomePage">
            <div className="text-center">
                <h3>This Page is for Admin only</h3>
                <h4>You don't have any permission to visit this page</h4>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={fakeAdminBg} alt="" />
                {/* Login Image Link __  */}
            </div>
        </div>
    );
};

export default FakeAdminHome;