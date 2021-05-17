import React from 'react';
import Navbar from '../components/Navbar';

import Apartment from '../components/Apartment'
import Tenants from '../components/Tenants';

const Home = () => {
    return (
        <div className="main-wrapper">
            <Navbar />
            <div className="apartment-tenants-infos">
                <Apartment />
                <Tenants />
            </div>
        </div>
    );
};

export default Home;