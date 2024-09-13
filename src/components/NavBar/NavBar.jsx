import { Link, Button } from '@mui/joy';

import './NavBar.css';
import { useEffect, useState } from 'react';

export default function NavBar({items}) {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY  >= 30) {
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

            <Button sx={{
                p:1, 
                m:1, 
                height: 1/2,
                color: "var(--tertiary-text)",
                backgroundColor: "var(--primary-text)",
                border: "solid 3px",
                borderColor: "var(--tertiary-text)",
                borderRadius: "15px",
                ":hover": {
                    bgcolor: "var(--tertiary-text)",
                    color: "var(--primary-text)"
                  }
            }}>Resume</Button>

        </div>
    );
}
