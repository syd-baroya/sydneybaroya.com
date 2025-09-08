'use client';

import { Box, Stack } from '@mui/material';
import ThemeToggle from '@/components/themeToggle.jsx';
import navBarStyles from '@/styles/navBar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '@/context/ScrollContext';

export default function NavBar({items}) {

    const [hasBackground, setHasBackground] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { wrapper } = useScroll();

    const containerVariants = {
        initial: {},
        hovered: {},
    };

    const sVariants = {
        initial: { opacity: 1, x: 0 },
    };

    const bVariants = {
        initial: { opacity: 1, x: 0 },
        hovered: { x: '3.3em', transition: { duration: 0.3 } }, // Move 'B' to its position
    };

    const sydneyBaroyaVariants = {
        initial: { width: 0, opacity: 0 }, // Start with 0 width and invisible
        hovered: {
            width: 'auto', // Expand to full width
            opacity: 1,
            transition: {
                delay: 0.1,
                duration: 0.2,
                ease: "easeOut",
            },
        },
    };

    const charVariants = {
        initial: { opacity: 0},
        hovered: { opacity: 1},
    };

    useEffect(() => {
        const scrollable = wrapper || window;

        function changeBackground() {
            const scrollY = wrapper ? wrapper.scrollTop : window.scrollY;
            if (scrollY >= 66) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        }

        scrollable.addEventListener("scroll", changeBackground);
        changeBackground();

        return () => {
            scrollable.removeEventListener('scroll', changeBackground);
        };
    }, [wrapper]);

    return (
        <div className={`${navBarStyles.header} ${hasBackground ? navBarStyles.scroll : ''}`}>
            <Link
                className={navBarStyles.main}
                href='/'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate={isHovered ? "hovered" : "initial"}
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    <motion.span variants={sVariants} style={{ display: 'inline-block', fontWeight: '500' }}>S</motion.span>
                    <motion.span variants={bVariants} style={{ display: 'inline-block', fontWeight: '500' }}>B</motion.span>

                    <motion.div
                        variants={sydneyBaroyaVariants}
                        style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute', left: '0.6em' }}
                    >
                        {"ydney ".split("").map((char, index) => (
                            <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={sydneyBaroyaVariants}
                        style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute', left: '4.5em' }}
                    >
                        {"aroya".split("").map((char, index) => (
                            <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </Link>
            <Stack direction='row' spacing={2} className={navBarStyles.navbar}>
                { items.map( item => {
                         return <Link href={'/'+ item.link}
                         key={item.name}
                         className={navBarStyles.link}
                     >{ item.name }</Link>
                 })}
                <ThemeToggle />
            </Stack>
        </div>
    );
}
