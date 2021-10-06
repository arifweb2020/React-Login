import React from 'react';
import InvestNav from './components/InvestNav';


function InvestContainer({props,children}) {
    return (
        <div>
            <InvestNav {...props}/>
            {children}
        </div>
    );
}

export default InvestContainer;