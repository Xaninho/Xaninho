import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between px-8">

                <nav className="flex">

                    <NavLink
                    to="/"
                    exact
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-purple-800 text-4xl font-bold tracking-widest">
                        Xaninho
                    </NavLink>

                    <NavLink
                    to="post"
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">
                        Blog Posts
                    </NavLink>

                    <NavLink
                    to="project"
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">
                        Projects
                    </NavLink>

                    <NavLink
                    to="about"
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-purple-800">
                        About Me!
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">

                    <SocialIcon
                        url="https://www.linkedin.com/in/alexandre-neves-ninja"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}/>

                    <SocialIcon
                        url="https://github.com/Xaninho"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}/>

                </div>

            </div>
        </header>
    )
}