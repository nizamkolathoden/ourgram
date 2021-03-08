import React from 'react';
import { Link } from 'react-router-dom'
const Settings = () => {
    return (
        <div>
            <h1>settings</h1>
            <h5>comming soon</h5>
            <img src="http://designsbyreanna.com/images/website_under_construction.gif" />
            <Link to="#"><h5>Change Name</h5></Link>
            <Link to="#"> <h5>Change Accout type(convert account  public  to private and vice versa )</h5></Link>

        </div>
    );
};

export default Settings;