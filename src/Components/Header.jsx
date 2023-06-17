import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <nav>
                <Link>WEB</Link>
                <Link>DESIGN</Link>
            </nav>
            <nav>
                <Link className='header-title'>SofiyullahJ</Link>
            </nav>
            <nav>
                <Link>ABOUT</Link>
                <Link>CONTACT</Link>
                <Link>CV</Link>
            </nav>
        </header>
     );
}
 
export default Header;