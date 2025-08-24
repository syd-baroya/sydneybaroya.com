"use client";

import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

const components = {
  a: ({ href, children }) =>
    href?.startsWith("/") ? (
      <Link href={href} className="text-blue-500 underline">{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{children}</a>
    ),
  img: (props) => <img {...props} className="rounded-lg shadow-md my-4" />,
  CustomButton: ({ href, children }) => (
    <a href={href} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
      {children}
    </a>
  ),
};

export default function MDXWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
