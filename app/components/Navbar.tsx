'use client';

import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (

<div className="navbar bg-base-100 shadow-sm">
    <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/home" className="link link-hover link-primary text-lg" >Home</Link>
          </li>
          <li>
            <Link href="/home/projects" className="link link-hover link-primary text-lg" >Projects</Link>
          </li>
          <li>
            <Link href="/home/blogs" className="link link-hover link-primary text-lg" >Blogs</Link>
          </li>
          <li>
            <Link href="/home/aboutme" className="link link-hover link-primary text-lg" >About Me</Link>
          </li>
        </ul>
    </div>
</div>

  )
}



export default Navbar