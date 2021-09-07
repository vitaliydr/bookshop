import React from 'react';
import './Userpage.css';
import CabinetSuperUser from './cabinets/CabinetSuperUser';
import CabinetUser from './cabinets/CabinetUser';

export default function Userpage () {
    

    return (
        <div className="containerUser">
            <div className="pageLineUserpage">
                <div className="pageMarkerUserpage"></div>
            </div>
            <CabinetSuperUser />
            {/* <CabinetUser /> */}
        </div>
    )
}