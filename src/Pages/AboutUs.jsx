import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from '../img/group-meeting.png'
import 'swiper/css';
import 'swiper/css/navigation';


function AboutUs() {
  return (
    <>
      <div className="container">
        <div className='flex flex-row justify-center items-center mx-[10%]'>
          <div className='py-10 text-center md:w-[40%] md:text-start'>
            <h1 className='text-3xl font-bold pb-5'>Your Software <br /> <span className='text-red-500'> Development </span> Partner</h1>
            <p>We are an imaginative team, driven by our collective passion to enhance the tech landscape. We thrive on diverse talents, bringing imaginative solutions to life and shaping the future of technology.</p>

          </div>
          <div className='w-[60%]'>
            <img className='hidden md:block' src={img1} alt="" />
          </div>

        </div>
      </div>
      <div className='bg-slate-400 py-10'>
        <h1 className='font-bold text-3xl text-center pb-5'>Our Historical Background</h1>
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          spaceBetween={30} // Adds space between slides
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on small devices
            },
            768: {
              slidesPerView: 3, // Show 3 slides on larger devices
            },
          }}
        >
          {Array(5).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <div className='p-4 bg-slate-400 shadow-md px-7'> {/* Adding background color to card */}
                <h1 className='text-xl font-semibold'>2016-2017</h1>
                <div className="">
                  <h5 className="mb-2 text-2xl font-bold">Noteworthy technology acquisitions 2021</h5>
                  <p className="font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>




    </>
  )
}

export default AboutUs