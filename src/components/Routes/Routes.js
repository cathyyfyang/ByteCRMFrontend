import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ContactList from '../Contact/ContactList';
import ContactMain from '../Contact/ContactMain';
import CompanyList from '../Company/CompanyList';
// import Logout from '../Log/Logout';
// import RegForm from '../Log/SignUp';


const Routes = () => (
   <Switch>
        <Redirect exact from="/" to ="/contacts/list" />
        <Route exact path="/contacts/list" component={ContactList} />
        <Route exact path="/contacts/contact" component={ContactMain} />
        <Route exact path="/companies" component={CompanyList} />
        {/* <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={RegForm} /> */}
        {/* others' change */}

    </Switch>
   );

export default Routes;