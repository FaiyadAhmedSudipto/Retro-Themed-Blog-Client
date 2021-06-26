import React from 'react';
import FakeAdminNavbar from '../../Shared/Navbar/AdminNavbar/FakeAdminNavbar';
import FakeAdminHome from '../AdminHome/FakeAdminHome';

const FakeAdmin = () => {
    return (
        <div>
            <FakeAdminNavbar />
            <FakeAdminHome />
        </div>
    );
};

export default FakeAdmin;