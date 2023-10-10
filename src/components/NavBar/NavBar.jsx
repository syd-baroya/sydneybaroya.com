import { Link, Button } from '@mui/joy';

import './NavBar.css';
import { useEffect, useState } from 'react';

export default function NavBar({items}) {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY  >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    })

    return (
        <div className={navbar ? "header scroll" : "header"}>
            <Link href="#home" sx={{p:1, m:1, height: 1/2, color: "var(--primary-text)"}}>Sydney Baroya</Link>

            <div className='navbar'>
                { items.map( item => {
                        return <Link 
                            href={item.link}
                            key={item.name}
                            sx={{
                                m: 1/2,
                                p: 1/2,
                                height: 1,
                                borderRadius: 1,
                                color: "var(--primary-text)"
                            }}
                        >{ item.name }</Link>
                    }
                )}
            </div>

            <Button sx={{
                p:1, 
                m:1, 
                height: 1/2,
                color: "var(--secondary-text)",
                backgroundColor: "var(--primary-text)",
                border: "solid 3px",
                borderColor: "var(--secondary-text)",
                borderRadius: "15px",
                ":hover": {
                    bgcolor: "var(--secondary-text)",
                    color: "var(--primary-text)"
                  }
            }}>Resume</Button>

        </div>
    );
}
