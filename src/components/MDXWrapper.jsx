"use client";

import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { motion } from 'framer-motion';
import MdxImage from './MdxImage';
import { Stack, Grid } from '@mui/material';

const components = {
  a: ({ href, children }) =>
    href?.startsWith("/") ? (
      <Link href={href} className="text-blue-500 underline">{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{children}</a>
    ),
  MdxImage: (props) => <MdxImage {...props} />,
  CustomButton: ({ href, children }) => (
    <a href={href} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
      {children}
    </a>
  ),
  motion: motion,
  Stack: Stack,
  Grid: Grid,
};

export default function MDXWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}


/**
 *  Here's how you would do it:

   1. Define or Import your component(s):
      Let's say you have a component called MyCustomComponent and another called AnotherComponent. You would either define them in the same file or import them:



   1     // src/components/MDXWrapper.jsx
   2 
   3     import Link from "next/link";
   4     import { motion } from 'framer-motion';
   5     import MyCustomComponent from './MyCustomComponent'; // Example: if MyCustomComponent is in a separate file
   6     import AnotherComponent from './AnotherComponent'; // Example: if AnotherComponent is in a separate file
   7 
   8     // ... (other imports)


   2. Add them to the `components` object:
      You add them as key-value pairs. The key will be the name you use in your MDX file, and the value will be the actual React component.



    1     // src/components/MDXWrapper.jsx
    2 
    3     // ... (imports)
    4 
    5     const components = {
    6       a: ({ href, children }) =>
    7         href?.startsWith("/\") ? (
    8           <Link href={href} className=\"text-blue-500 underline\">{children}</Link>
    9         ) : (
   10           <a href={href} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-500 underline\">{children}</a>
   11         ),
   12       img: (props) => <img {...props} className=\"rounded-lg shadow-md my-4\" />,
   13       CustomButton: ({ href, children }) => (
   14         <a href={href} className=\"bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700\">
   15           {children}
   16         </a>
   17       ),
   18       motion: motion,
   19       // Add your new components here:
   20       MyCustomComponent: MyCustomComponent, // Use <MyCustomComponent /> in MDX
   21       AnotherComponent: AnotherComponent,   // Use <AnotherComponent /> in MDX
   22       // You can also define components inline if they are simple:
   23       InlineComponent: ({ text }) => <p style={{ color: 'green' }}>{text}</p>, // Use <InlineComponent text="Hello" /> in MDX
   24     };
 */