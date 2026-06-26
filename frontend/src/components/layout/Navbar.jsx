import React from "react"

function Navbar() {
    return (
        <nav className="bg-neutral-300">
            <div className="container max-w-xl mx-auto w-9/12 px-4">
                <div className="flex items-center justify-between">
                    <div className="text-black font-bold text-xl">ADA App</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-black hover:text-gray-300">Home</a>
                        <a href="#" className="text-black hover:text-gray-300">About</a>
                        <a href="#" className="text-black hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar