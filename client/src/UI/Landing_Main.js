import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import RegistrationPlayer from '../Authentication/RegistrationPlayer';
import RegistrationOrganizer from '../Authentication/RegistrationOrganizer';
import LoginOrganizer from '../UI/Organizer_login';
import LoginPlayer from '../UI/Player_login';
import Landing from './Landing/Landing';
import Add_Event from './Add_Event';
// // import AdminDashboard from './AdminDashboard';
// import sideNav from '../UI/Landing/AdminSideNav'
import AdminSideNav from '../UI/Admin/AdminDashboard';


class Landing_Main extends Component {
    render() {
        return (
            <div>
                {/* <Route path='/' component={Landing} /> */}
                <Route path='/organizer/register' exact component={RegistrationOrganizer} />

                <Route path='/player/register' exact component={RegistrationPlayer} />
                <Route path='/organizer/login' exact component={LoginOrganizer} />
                <Route path='/player/login' exact component={LoginPlayer} />
                <Route path='/' exact component={Landing} />
                {/* <Route path='/sideNav' exact component={sideNav} /> */}

                <Route path='/admin/dashboard' exact component={AdminSideNav} />
                <Route path='/AddEvent' exact component={Add_Event} />
                {/* <Route path='/UserLanding' component={UserLanding}/> */}


            </div>

        )

    }
}
export default Landing_Main;
