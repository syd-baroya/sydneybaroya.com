import { Link, Button } from '@mui/joy';

import './NavBar.css';
import { useEffect, useState } from 'react';

let didInit = false;

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
                { items.map( (item) => 
                    <Link 
                        href={item.link}
                        key={item.name}
                        underline='none'
                        sx={{
                            m: 1/2,
                            px: 1,
                            py: 1/2,
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
                )}
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
