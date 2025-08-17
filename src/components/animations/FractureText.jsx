
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/animations.module.css';

const FractureText = ({ children }) => {
    const containerVariants = {
        initial: {},
        hover: {
            transition: {
                // staggerChildren: 0.05,
                delayChildren: 0,
            },
        },
    };

    const numPeaks = 3;
    const len = children.length;
    const maxPerPeak = Math.ceil(len / (numPeaks + 1));
    let direction = maxPerPeak;
    let currentAdjust = -1;
    let count = 0;

    const letters = children.split('').map((char, index) => {
        const letterVariants = {
            initial: {
                y: '0%',
                rotate: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.2, 1, 0.3, 1],
                }
            },
            hover: {
                y: `${(Math.ceil((direction/len)*100)).toFixed(0)}%`,
                rotate: (Math.random()*60 - 30),
                transition: {
                    duration: 0.5,
                    ease: [0.2, 1, 0.3, 1],
                }
            },
        };
        count++;
        direction += currentAdjust;
        if(count === maxPerPeak) {
            currentAdjust *= -1;
            count = 0;
        }
        
        return (
            <motion.span
                key={index}
                variants={letterVariants}
                className={styles.fractureLetter}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        );
    });

    return (
        <motion.span
            className={styles.fractureContainer}
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
        >
            {letters}
        </motion.span>
    );
};

export default FractureText;
