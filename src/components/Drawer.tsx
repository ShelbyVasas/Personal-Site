"use client"
import Link from "next/link"
import Jokes from "./Jokes"

export default function Drawer() {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="btn btn-square drawer-button bg-transparent border-none text-black hover:text-black hover:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
                {/* Sidebar content here */}
                <div>
                  <li><Link href="https://github.com/ShelbyVasas" className="text-2xl">GITHUB</Link></li>
                  <li><Link href="https://www.linkedin.com/in/shelby-vasas/" className="text-2xl">LINKEDIN</Link></li>
                </div>
                <Jokes/>
              </ul>
            </div>
        </div>
    )
}