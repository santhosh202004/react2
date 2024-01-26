import React from 'react'
import {Outlet, Link} from "react-router-dom";
import './Layout.css'
export default function Layout() {
  return (
    <div>
           <nav>
                <ul>
                  <div class="f1">
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    </div>
                </ul>
            </nav>
            <Outlet/>
    </div>
  )
}
