import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import img1 from "../img/faviconV2.png"
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import ContactUs from '../Pages/ContactUs'

const products = [
    { name: 'Cyber Security', description: 'Get a better understanding of your traffic', to: '/services/cybersecurity' },
    { name: 'Engagement', description: 'Speak directly to your customers', to: 'services/engagement' },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', to: '/services/security' },
    { name: 'Integrations', description: 'Connect with third-party tools', to: '/services/integrations' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', to: '/services/automations' },
]



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
                    <NavLink to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About Us
                    </NavLink>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <NavLink to="/services" className="text-sm font-semibold leading-6 text-gray-900">
                                Services
                            </NavLink>
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >

                                        <div className="flex-auto">
                                            <NavLink to={item.to} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </NavLink>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </PopoverPanel>
                    </Popover>

                    <NavLink to="/products" className="text-sm font-semibold leading-6 text-gray-900">
                        Products
                    </NavLink>
                    <NavLink to="/careers" className="text-sm font-semibold leading-6 text-gray-900">
                        Careers
                    </NavLink>
                    <NavLink to="/testimonials" className="text-sm font-semibold leading-6 text-gray-900">
                        Testimonials
                    </NavLink>
                    <NavLink to='/blogs' className="text-sm font-semibold leading-6 text-gray-900">
                        Blog
                    </NavLink>
                    <NavLink to='/contact' className="text-sm font-semibold leading-6 text-gray-900">
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
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </NavLink>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Services
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {products.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                to={item.to}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <NavLink
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Careers
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Testimonials
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blogs
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
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
