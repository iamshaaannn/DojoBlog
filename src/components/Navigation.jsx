import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return <>
        <nav className="navigation">
            <h1>DojoBlog.</h1>
            <div className="links"> 
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            
            </div>
        </nav>
    </>;
};

export default Navigation;
