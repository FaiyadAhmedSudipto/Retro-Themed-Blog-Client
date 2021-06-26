import React, { useContext } from 'react';
import { UserContext } from '../../App';
import CustomerNavbar from '../Shared/Navbar/CustomerNavbar/CustomerNavbar';


const CustomerPanel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <CustomerNavbar />
            <p>{loggedInUser.email}</p>
            <p></p>
        </div>
    );
};

export default CustomerPanel;