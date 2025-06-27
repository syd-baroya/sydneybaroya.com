'use client';

import { Button, Typography } from '@mui/material';
import ThemeToggle from '@/components/themeToggle.jsx';
import navBarStyles from '@/styles/navBar.module.css';
import Link from 'next/link';
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
        <div className={`${navBarStyles.header} ${hasBackground ? navBarStyles.scroll : ''}`}>
            <Link href='/home' style={{paddingLeft: '10px'}}>Sydney Baroya</Link>
            <div className={navBarStyles.navbar}>
                { items.map( item => {
                         return <Link href={'/'+ item.link}
                         key={item.name}
                         className={navBarStyles.link}
                     >{ item.name }</Link>
                 })}
                <ThemeToggle />
            </div>
        </div>
    );
}
