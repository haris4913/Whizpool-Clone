import React from 'react'
import { Card } from "flowbite-react";
import { NavLink } from 'react-router-dom';

function Services() {
  const cardData = [
    {
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imgSrc: "/images/blog/image-4.jpg"
    },
    {
      title: "New Innovations in AI",
      description: "Discover the latest advancements in artificial intelligence and what they mean for the future.",
      imgSrc: "/images/blog/image-2.jpg"
    },
    {
      title: "Exploring Space: 2021 Highlights",
      description: "A look back at the top space exploration achievements of 2021.",
      imgSrc: "/images/blog/image-3.jpg"
    },
    {
      title: "Advances in Renewable Energy",
      description: "How renewable energy technologies are progressing globally.",
      imgSrc: "/images/blog/image-1.jpg"
    },
    {
      title: "The Rise of Electric Vehicles",
      description: "An analysis of the electric vehicle market and its growing popularity.",
      imgSrc: "/images/blog/image-5.jpg"
    },
    {
      title: "Understanding Blockchain",
      description: "A deep dive into blockchain technology and its potential applications.",
      imgSrc: "/images/blog/image-6.jpg"
    }
  ];
  return (
    <>
      <div className='py-10 text-center md:w-[40%] md:text-start mx-[5%]'>
        <h1 className='text-3xl font-bold pb-5'>Your Software <br /> <span className='text-red-500'> Development </span> Partner</h1>
        <p>We are an imaginative team, driven by our collective passion to enhance the tech landscape. We thrive on diverse talents, bringing imaginative solutions to life and shaping the future of technology.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mx-[2%]">
        {cardData.map((card, index) => (
          <Card key={index} className="max-w-sm" imgSrc={card.imgSrc} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
            <NavLink to='/contact' type="button" className="w-fit text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Get in touch</NavLink>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Services