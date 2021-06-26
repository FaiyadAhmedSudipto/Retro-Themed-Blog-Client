import React from 'react';
import TechBlogs from '../TechBlogs/TechBlogs';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Header from '../Header/HeaderControl/Header';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import TechFact from '../TechFact/TechFact';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <TechBlogs/>
            <TechFact />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;