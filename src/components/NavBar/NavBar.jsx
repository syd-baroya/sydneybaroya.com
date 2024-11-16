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

    
    const onLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const rootStyles = getComputedStyle(document.documentElement);
            const offset =  document.documentElement.clientHeight * (parseInt(rootStyles.getPropertyValue("--header-height"))/100);
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Add smooth scrolling
            });
        }
    };

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
                        onClick={(e) => onLinkClick(e, item.id)}
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
                                color: "var(--quaternary-color)",
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
                color: "var(--tertiary-color)",
                backgroundColor: "var(--primary-text)",
                border: "solid 3px",
                borderColor: "var(--tertiary-color)",
                borderRadius: "15px",
                ":hover": {
                    bgcolor: "var(--tertiary-color)",
                    color: "var(--primary-text)"
                  }
            }}>Resume</Button>

        </div>
    );
}
