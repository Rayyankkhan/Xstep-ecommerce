// import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Pagination  } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FEATURED } from '../constant/data';
import FadeIn from './FadeIn';
//Framer Motion
import { motion } from 'framer-motion';

const Feature = () => {
  return (
    <>
      <section
        className="max-padd-container py-16 xl:py-32 "
        id="featured"
      >
        {/* featured section */}
        <div className="max-w-[90%] mx-auto">
            {/* title */}
            <motion.div 
                 variants={FadeIn("right", 1)}
                 initial="hidden"
                 whileInView="show"
                 exit="hidden"
            className="flex items-end justify-end pt-12">
                <h4 className="text-4xl font-ace leading-none flex flex-col items-end ">Discover <span className="medium-16">New</span></h4>
            </motion.div>
            {/* container  */}
            <motion.div 
             variants={FadeIn("left", 1)}
             initial="hidden"
             whileInView="show"
             exit="hidden"
            className="">
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='h-[441px] mt-10'
                >
                    {FEATURED.map((feature, i)=> (
                            <SwiperSlide key={i}>
                                <div style={{backgroundColor: feature.bgcolor}} className="py-6 px-10 rounded-xl">
                                    <div className='flex items-end justify-end text-white bold-24'>0{i + 1}</div>
                                    <div className="mb-8">
                                        <img src={feature.shoe} alt={feature.title} className='w-[22rem] rounded-3xl h-auto' />
                                    </div>
                                    <div className="flexBetween">
                                        <div className="text-white">
                                            <h4 className="medium-15 capitalize">
                                                {feature.title}
                                            </h4>
                                            <span className="medium-20"><span className="regular-15">$</span>{feature.price}</span>
                                        </div>
                                        <a href="/" className='text-white bg-black/10 flexCenter rounded-full regular-32 h-10 w-10 pb-1'>+</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default Feature;
