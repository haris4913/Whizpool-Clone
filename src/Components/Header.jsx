import { useState } from 'react'
import img1 from "../img/faviconV2.png"
import { NavLink, useNavigate } from 'react-router-dom'
import {
    Dialog,
    DialogPanel,
    PopoverGroup
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact');
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <NavLink to="/" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src={img1}
                            className="h-8 w-auto"
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <NavLink to='' className={({ isActive }) =>
                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} text-sm font-semibold leading-6`
                    }>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) =>
                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} text-sm font-semibold leading-6`
                    }

                    // code to go on the particular section 
                    // onClick={(e) => {
                    //     e.preventDefault();
                    //     window.scrollTo({
                    //         top: document.querySelector("#about").offsetTop,
                    //         behavior: "smooth",
                    //     });
                    // }}
                    >
                        About Us
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) =>
                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} text-sm font-semibold leading-6`
                    }>
                        Services
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) =>
                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} text-sm font-semibold leading-6`
                    }>
                        Products
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) =>
                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} text-sm font-semibold leading-6`
                    }>
                        Contact Us
                    </NavLink>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={handleButtonClick} type="button" className="text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Get in touch</button>
                </div>


                {/* With navlink also we navigate  */}
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to='/contact' type="button" className="text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Get in touch</NavLink>
                </div> */}


            </nav>

            {/* Mobile VIEW  */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink to="#" className="-m-1.5 p-1.5">
                            <img
                                alt=""
                                src={img1}
                                className="h-8 w-auto"
                            />
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`
                                    }>
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`
                                    }>
                                    Services
                                </NavLink>

                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`
                                    }>
                                    Products
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `${isActive ? "font-bold underline underline-offset-8 text-red-500" : ""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`
                                    }>
                                    Contact Us
                                </NavLink>
                            </div>
                            <div className="py-6">
                                <button onClick={handleButtonClick} type="button" className="text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Get in touch</button>
                            </div>

                        </div>
                    </div>

                </DialogPanel>
            </Dialog>
        </header>
    )
}
