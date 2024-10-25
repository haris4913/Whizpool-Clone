import React from 'react'
import { useState } from 'react';
import img1 from '../img/group-meeting.png';

function ContactUs() {
    const [selct, setselect] = useState();
    const handleDropdownList = (event) => {
        setselect(event.target.value);
    };
    return (
        <>
            <div className='container'>
                <div className='flex justify-center items-center mx-[10%]'>
                    <div className='space-y-10'>
                        <h1 className='text-red-500 font-bold text-6xl mt-10'>Reach Out <span className='text-black'>To Us</span></h1>
                        <p>Get in Touch for Cutting-Edge Software Solutions and Innovation in Software Development. <br />Let’s Transform Ideas into Reality. We are just a click away.
                        </p>
                        <form action="#">
                            <div className='space-y-4'>
                                <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 '>
                                    <div className="w-full">
                                        <label htmlFor="name" className="block text-sm font-medium"></label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name*"
                                            autoComplete="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="email" className="block text-sm font-medium"></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="E-mail*"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 '>

                                    <div className="w-full">
                                        <label htmlFor="phone" className="block text-sm font-medium"></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            placeholder="Phone (optional)"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="option"
                                            id="option"
                                            value={selct}
                                            onChange={handleDropdownList}
                                        >
                                            <option value="">Select option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        name="msg"
                                        id="msg"
                                        placeholder='Enter Your Msg*'
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className="block mx-auto text-center w-fit text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                >
                                    Submit
                                </button>

                            </div>
                        </form>

                    </div>
                    <div>
                        <img className='hidden md:block' src={img1} alt="" />
                    </div>
                </div>

                <div className='flex flex-col w-full gap-5 my-20 md:flex-row'>

                    <div className='border-2 border-red-400 w-full'>
                        <iframe className='h-[300px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950656.3791312082!2d38.551683474031876!3d21.448831219370312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1729865218486!5m2!1sen!2s" />
                    </div>
                    <div className='border-2 border-red-400 w-full'>
                        <iframe className='h-[300px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950656.3791312082!2d38.551683474031876!3d21.448831219370312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1729865218486!5m2!1sen!2s" />
                    </div>
                    <div className='border-2 border-red-400 w-full'>
                        <iframe className='h-[300px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950656.3791312082!2d38.551683474031876!3d21.448831219370312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1729865218486!5m2!1sen!2s" />
                    </div>
                   
                    </div>
                </div>
           

        </>
    )
}

export default ContactUs