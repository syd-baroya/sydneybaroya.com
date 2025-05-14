import { Link, Button } from '@mui/material';

import './NavBar.css';
import { useEffect, useState } from 'react';

export default function NavBar({items}) {

    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        function changeBackground() {
            if(window.scrollY  >= 66) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        }
        window.addEventListener("scroll", changeBackground);
        return () => { window.removeEventListener('scroll', changeBackground); };
    }, []);

    return (
        <div className={hasBackground ? "header scroll" : "header"}>
            <Link href="#home" underline='none' sx={{
                p:1, m:1, height: 1/2, 
                color: "var(--primary-text)"
            }}>Sydney Baroya</Link>
            <div className='navbar'>
                { items.map( item => {
                         return <Link 
                         href={item.link}
                         key={item.name}
                         underline='none'
                         sx={{
                             m: 1/2,
                             pr: 1,
                             pl: 1,
                             pt: 1/2,
                             pb: 1/2,
                             height: 1/2,
                             borderRadius: 1,
                             color: "var(--primary-text)",
                             ":hover": {
                                 bgcolor: "var(--primary-text)",
                                 color: "var(--secondary-text)",
                                 borderRadius: "10px",
                                 }
                         }}
                     >{ item.name }</Link>
                 })}
            </div>
        </div>
    );
}
