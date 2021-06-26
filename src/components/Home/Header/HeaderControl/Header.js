import React, { useContext } from 'react';
import './Header.css';
import NavbarNew from '../../../Shared/Navbar/NavbarNew';

const Header = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <NavbarNew />
        </div>
    );
};

export default Header;