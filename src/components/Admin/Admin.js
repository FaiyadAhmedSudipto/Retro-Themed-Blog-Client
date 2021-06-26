import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "../Home/Header/HeaderControl/Header.css";
import FakeAdmin from './AdminControl/FakeAdmin';
import RealAdmin from './AdminControl/RealAdmin';

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState({ isAdmin: false});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://peaceful-cove-62946.herokuapp.com/isAdmin/?email=${loggedInUser.email}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setIsAdmin(data))
            .catch((err) => console.log(err))
        // .then(data => setEvent(data))
    }, [])

    return (
        <div>
            { isAdmin.isAdmin ? ( 
            <RealAdmin />
            ) : ( 
            <FakeAdmin />
            )}


            {/* <Navbar /> */}
        </div>
    );
};

export default Admin;
