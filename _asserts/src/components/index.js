import React from 'react';

import RootRoute from '../route/routes';
import PageTitleCompo from './page-title';
import AppNavBarCompo from './navbar';

const RootApp = () => (
    <div>
        <AppNavBarCompo />
        <div className="container-fluid">
            <PageTitleCompo pathName={window.location.pathname.replace(/\//g, '')} />
            <RootRoute />
        </div>
    </div>
)

export default RootApp;
