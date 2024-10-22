import React from 'react';
import logo from "../img/whizpool-logo.svg"; // Ensure the path to your logo is correct

function Footer() {
    return (
        <footer className="bg-blue-950 p-4"> {/* Use footer for semantic structure */}
            <div className="container mx-auto"> {/* Center the content in a container */}
                <div className="flex flex-col items-center"> {/* Center content */}
                    <img className="mb-4" src={logo} alt="Footer Logo" /> {/* Add margin for spacing */}
                    <ul className="text-white space-y-2"> {/* Add spacing between list items */}
                        <li className="flex items-center">
                            <i className="fa-solid fa-location-dot me-2 "></i>
                            California
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            Jeddah
                        </li>
                        <li className="flex items-center">
                        <i className="fa-solid fa-location-dot me-2"></i>
                            Islamabad
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
