import React from 'react';
import Header from './Header';

const Dashboard = () => {
    

    return (
        <>
            <Header></Header>
            <h2> local storage value { localStorage.getItem("loginId") }</h2>

           

        </>
    );
};

export default Dashboard;
