import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { NavLink, Link } from 'react-router-dom';
import img2 from '../img/block-image-1.svg';
import img3 from '../img/block-image-2.svg';
import img4 from '../img/group-meeting.png';
import img5 from '../img/hero-1.png'
import flipimg1 from '../img/flip-1.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';


function Home() {
  const handleType = (count) => {
    // Access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  const [selct, setselect] = useState();
  const handleDropdownList = (event) => {
    setselect(event.target.value);
  };

  return (
    <div className=" ">
      <div className="flex justify-center items-center container mx-auto w-full">

        <div className='mx-auto px-10 md:px-12 lg:px-14 w-[100%] md:w-[50%]'>
          <h1 className="text-3xl" style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
            We Create {' '}
            <span className="text-red-400 font-bold">
              <Typewriter
                words={['Mobile', 'App', 'IoT', 'AI', 'Data Analytics', 'Game']}
                loop={5}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
            <br />
            Experiences
          </h1>
          <p className='mb-3'>
            We deliver value to hundreds of leading businesses, which have derived strategic benefits from our transformative solutions. Let’s speak about your project.
          </p>
          <div className="lg:flex lg:flex-1 lg:justify-start my-4">
            <NavLink to='/contact' type="button" className="text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
              Get in touch
            </NavLink>
          </div>
        </div>

        <div>
          <img className='hidden md:block' src={img5} alt="" />
        </div>

      </div>

      <div className='bg-slate-100 py-10'>
        <div className='container mx-auto'>

          <div className='flex flex-col  mx-20 gap-10 md:flex-row'>
            <div className='mt-4 md:mt-0'>
              <img className="hover:scale-105 transition-transform duration-999 ease-in" src={img2} alt="" />
              <h1 className='font-bold text-3xl mt-10'>Solution focused, not hours focused</h1>
              <p>Instead of just counting hours, we think it's important to provide solutions. We are not just timekeepers; we are the problem solvers. Our approach is centered on your needs, and we make sure that every line of code contributes meaningful and efficient solutions.
              </p>
            </div>
            <div className='mt-4 md:mt-40'>
              <img className="hover:scale-105 transition-transform duration-999 ease-in" src={img3} alt="" />
              <h1 className='font-bold text-3xl mt-10'>Solution focused, not hours focused</h1>
              <p>Instead of just counting hours, we think it's important to provide solutions. We are not just timekeepers; we are the problem solvers. Our approach is centered on your needs, and we make sure that every line of code contributes meaningful and efficient solutions.
              </p>
            </div>
          </div>
          <div className='flex flex-col  mx-20 gap-10 md:flex-row'>
            <div className='mt-10 md:mt-0'>
              <img className="hover:scale-105 transition-transform duration-999 ease-in" src={img2} alt="" />
              <h1 className='font-bold text-3xl mt-10'>Solution focused, not hours focused</h1>
              <p>Instead of just counting hours, we think it's important to provide solutions. We are not just timekeepers; we are the problem solvers. Our approach is centered on your needs, and we make sure that every line of code contributes meaningful and efficient solutions.
              </p>
            </div>
            <div className='mt-4 md:mt-40'>
              <img className="hover:scale-105 transition-transform duration-999 ease-in" src={img3} alt="" />
              <h1 className='font-bold text-3xl mt-10'>Solution focused, not hours focused</h1>
              <p className='my-10'>Instead of just counting hours, we think it's important to provide solutions. We are not just timekeepers; we are the problem solvers. Our approach is centered on your needs, and we make sure that every line of code contributes meaningful and efficient solutions.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className=''>
        <h1 className='text-center font-bold text-3xl my-10'>Software Development Process
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto my-20">
          <div className="flex justify-center mb-20 md:my-0 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={flipimg1} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>Requirement Analysis</h1>
                  <p>We begin by discussing and analyzing our client's needs, sketching the outline of the required software, figuring out gaps, and proposing solutions alongside the way.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-center my-20 md:my-0 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={flipimg1} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>Requirement Analysis</h1>
                  <p>We begin by discussing and analyzing our client's needs, sketching the outline of the required software, figuring out gaps, and proposing solutions alongside the way.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-20 md:my-0 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={flipimg1} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>Requirement Analysis</h1>
                  <p>We begin by discussing and analyzing our client's needs, sketching the outline of the required software, figuring out gaps, and proposing solutions alongside the way.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-20 md:my-0 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={flipimg1} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>Requirement Analysis</h1>
                  <p>We begin by discussing and analyzing our client's needs, sketching the outline of the required software, figuring out gaps, and proposing solutions alongside the way.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='flex justify-center my-10'>
          <div>
            <h1 className='my-5'>Explore the exclusive services offered by our team</h1>
            <Link to='/services' className="block mx-auto text-center w-fit text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-slate-100 py-10 space-y-10'>
        <h1 className='text-center text-3xl font-bold'>Great Clients Make Us Better
        </h1>
        <Swiper className='direction'
          spaceBetween={20} // Space between slides
          slidesPerView={5} // Show 6 slides at once
          loop={true} // Enable looping for continuous effect

          freeMode={{ // Correctly passing freeMode as an object
            enabled: false,
            momentum: false, // Disable momentum for better control
          }}
          autoplay={{
            delay: 0, // No delay for continuous movement
            disableOnInteraction: false, // Keep autoplay running after user interaction
            reverseDirection: true
          }}
          modules={[Autoplay, FreeMode]} // Include required modules
          speed={3000} // Adjust speed for smoother scrolling

        >
          {/* Use images or any content for each slide */}
          <SwiperSlide><img src={img2} alt="Slide 1" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 2" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 3" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 4" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 5" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 6" className="w-full" /></SwiperSlide>
        </Swiper>
        <Swiper className='direction'
          spaceBetween={20} // Space between slides
          slidesPerView={5} // Show 6 slides at once
          loop={true} // Enable looping for continuous effect

          freeMode={{ // Correctly passing freeMode as an object
            enabled: false,
            momentum: false, // Disable momentum for better control
          }}
          autoplay={{
            delay: 0, // No delay for continuous movement
            disableOnInteraction: false, // Keep autoplay running after user interaction
          }}
          modules={[Autoplay, FreeMode]} // Include required modules
          speed={3000} // Adjust speed for smoother scrolling
        //  direction='rtl'/
        >
          {/* Use images or any content for each slide */}
          <SwiperSlide><img src={img2} alt="Slide 1" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 2" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 3" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 4" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 5" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 6" className="w-full" /></SwiperSlide>
        </Swiper>
      </div>

      <div>
        <section className="">
          <div className="container px-5 mx-auto my-10">
            <h1 className='text-center text-3xl font-bold my-10' >We're Proud Of Our Work</h1>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                  <p className="leading-relaxed">Projects</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                  <p className="leading-relaxed">Teams</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                  <i className="text-indigo-500 fa-solid fa-file text-3xl"></i>

                  <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                  <p className="leading-relaxed">Files</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                  <i className="text-indigo-500 fa-solid fa-globe text-3xl"></i>
                  <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p className="leading-relaxed">Conutries Servied</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className='bg-slate-50 py-10'>
        <h1 className='text-center text-3xl font-bold py-10'>Our Amazing Customers Testimonial</h1>
        <div className='flex justify-center'>
          <div className="flex justify-center my-10 w-[60%] text-center bg-white rounded-lg shadow sm:p-8">
            <Swiper
              pagination={{ clickable: true }}
              slidesPerView={1}
              loop={true}
              speed={1000}  // Sets transition speed to 1 second
              freeMode={{
                enabled: false,
                momentum: false,
              }}
              autoplay={{
                delay: 3000, // 3-second delay for each slide
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, FreeMode]}
              className="mySwiper mb-10"
            >
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>
              <SwiperSlide>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam similique consequatur deleniti, beatae quam voluptates ab dolorem dignissimos maiores laboriosam.</SwiperSlide>

            </Swiper>
          </div>

        </div>
        <Link to='/products' className="block mx-auto text-center w-fit text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Explore Us
        </Link>
      </div>

      <div className="relative flex flex-col md:flex-row justify-start items-end" style={{ backgroundColor: '#e9f5ff' }} id='about'>
        <img src={img4} alt="" className="w-full md:w-1/2 " />
        <div className="md:absolute left-[60%] top-[50%] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-6 md:p-8">
          <form action="#">
            <h5 className="text-xl font-medium">Talk to us and</h5>
            <h2 className="form-heading font-bold text-3xl mb-3">Get your project moving!</h2>
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
      </div>




    </div>







  );
}

export default Home;
