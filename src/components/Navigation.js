import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li><a>acueil</a></li>
                    </NavLink>
                    
                    <NavLink to="/top">
                        <li><a>Coup de coeur</a></li>
                    </NavLink>
                </ul>
            </nav>           
        </div>
    );
};

export default Navigation;