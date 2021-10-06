import React from 'react';
import Nav from './components/Nav';


export default function MainContainer({ props, children }) {
    return (
        <div>
            <Nav {...props} />
            {children}
        </div>
    );
}


