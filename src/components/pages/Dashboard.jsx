import React, { Fragment } from 'react';
import NavBar from '../ui/organisms/NavBar';
import SideBar from '../ui/organisms/SideBar';
import  Meetups  from '../ui/organisms/Meetups';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

    return (
        <Fragment>
            <div className="dashboard_main">
                 <NavBar />
                <section className="dashboard__section">
                    <SideBar />
                    <Meetups />
                </section>
            </div>
        </Fragment>
    )
}


export default Dashboard;