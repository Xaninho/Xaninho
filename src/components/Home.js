import React from "react";
import image from "../Underground Tree.jpg"

export default function Home() {
    return (
        <main>

            <img src={image}
            alt="Undeground Tree"
            className="absolute object-cover w-full h-full"/>

            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-purple-100 font-bold leading-none lg:leading-snug home-name">Sup, I'm Xaninho</h1>
            </section>
        </main>
    )
}