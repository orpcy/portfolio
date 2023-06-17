import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <nav>
                <Link>Web</Link>
                <Link>Design</Link>
            </nav>
            <nav>
                <Link className='header-title'>SofiyullahJ</Link>
            </nav>
            <nav>
                <Link>About</Link>
                <Link>Contact</Link>
            </nav>
        </header>
     );
}
 
export default Header;