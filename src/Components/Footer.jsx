import React from 'react';
import logo from "../img/whizpool-logo.svg"; // Ensure the path to your logo is correct
import { Link } from 'react-router-dom';

function Footer() {
    const phoneNumber = "+16197986263";
    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank"); // Open WhatsApp in a new window/tab
    };

    const email = "contact@whizpool.com";
    const handleEmailClick = () => {
        const url = `mailto:${email}`;
        window.open(url, "_blank"); // Open email client in a new window/tab
    };
    return (
        <footer className="bg-blue-950 p-8"> {/* Increased padding for a more spacious look */}
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-around items-start md:items-start">
                    {/* Logo and Locations */}
                    <div className="flex flex-col items-start mb-8 md:mb-0"> {/* Added margin-bottom for spacing */}
                        <img className="mb-4" src={logo} alt="Footer Logo" /> {/* Add margin for spacing */}
                        <ul className="text-white space-y-2">
                            <Link  className="flex items-center">
                                <i className="fa-solid fa-location-dot me-2"></i>
                                California
                            </Link>
                            <li className="flex items-center">
                                <i className="fa-solid fa-location-dot me-2"></i>
                                Jeddah
                            </li>
                            <li className="flex items-center">
                                <i className="fa-solid fa-location-dot me-2"></i>
                                Islamabad
                            </li>
                            <div className='space-x-5'>
                                <a href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook"></i>

                                </a>
                                <a href="">
                                <i className="fa-brands fa-twitter"></i>

                                </a>
                                <a href="">
                                <i className="fa-brands fa-linkedin"></i>

                                </a>
                                <a href="">

                                <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start">
                        <h1 className="mb-4 text-white font-bold text-xl">Quick Links</h1>
                        <ul className="text-white space-y-2">
                            <Link to='/' className="flex items-center">
                                Home
                            </Link>
                            <Link to='/about' className="flex items-center">
                                About Us
                            </Link>
                            <Link to='' className="flex items-center">
                                Services
                            </Link>
                            <Link className="flex items-center">
                                Products
                            </Link>
                            <Link className="flex items-center">
                                Careers
                            </Link>
                            <Link className="flex items-center">
                                CLients & Testimonials
                            </Link>
                            <Link className="flex items-center">
                                Contact Us
                            </Link>
                            <Link className="flex items-center">
                                Blog
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="mb-4 text-white font-bold text-xl">Services</h1>
                        <ul className="text-white space-y-2">
                            <Link className="flex items-center">
                                Cyber Security
                            </Link>
                            <Link className="flex items-center">
                                Database Consultancy
                            </Link>
                            <Link className="flex items-center">
                                AI and ML
                            </Link>
                            <Link className="flex items-center">
                                Hire A Team
                            </Link>
                            <Link className="flex items-center">
                                Full Stack Development
                            </Link>
                            <Link className="flex items-center">
                                Mobile App Development
                            </Link>
                            <Link className="flex items-center">
                                DevOps Consultancy
                            </Link>
                            <Link className="flex items-center">
                                Data Analytics
                            </Link>
                            <Link className="flex items-center">
                                Website Development
                            </Link>
                            <Link className="flex items-center">
                                Audio & Video Conferencing
                            </Link>
                            <Link className="flex items-center">
                                UI/UX Design
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="mb-4 text-white font-bold text-xl">Support</h1>
                        <ul className="text-white space-y-2">
                            <li className="flex flex-row items-center">
                                <div onClick={handleEmailClick} className='flex items-center gap-2 cursor-pointer'>
                                    <div className='h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center'>
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className=''>
                                        <p>   Email us at:</p>
                                        <p>   contact@whizpool.com</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-row items-center">
                                <div onClick={handleWhatsAppClick} className='flex items-center gap-2 cursor-pointer'>
                                    <div className='h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center'>
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='my-14'>
                                        <p>   Contact us at:</p>
                                        <p>   +92 (051) 22 80 011</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-row items-center">
                                <div className='flex items-center gap-2'>
                                    <button onClick={handleWhatsAppClick} className='h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center'>
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </button>
                                    <div className=''>
                                        <p>   WhatsApp at:</p>
                                        <p onClick={handleWhatsAppClick} className='cursor-pointer'>   +1 (619) 798-6263</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
