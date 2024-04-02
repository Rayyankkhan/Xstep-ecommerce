// import React from 'react'

import about from '../assets/about.jpg'
import AboutCard from './AboutCard';
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import arrowRight from '../assets/arrow-right.svg'
import AboutStats from './AboutStats';
import Button from './Button';
import FadeIn from './FadeIn';

// framer motion 
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <section className="max-padd-container pb-16 xl:pb-32" id='about'>
        {/* title */}
        <div className="flexBetween">
          <h4 className="text-4xl font-ace leading-none flex flex-col items-end pb-12 ">
            About <span className="medium-16">us</span>
          </h4>
        </div>
        {/* {Container} */}
        <div className="flex flex-col xl:flex-row gap-10">
          {/* left  */}
          <motion.div
             variants={FadeIn("right", 1)}
             initial="hidden"
             whileInView="show"
             exit="hidden"
          className="flex flex-1">
            <img src={about} alt="aboutImg " className='rounded-3xl' />
          </motion.div>
          {/* right  */}
          <motion.div
             variants={FadeIn("left", 1)}
             initial="hidden"
             whileInView="show"
             exit="hidden"
          className="flex flex-1">
            {/* container  */}
            <div className="">
                {/* Cards  */}
                <div className="flex flex-col xl:flex-row gap-5">
                    <AboutCard shoeImg={product1} containerStyles={'bg-secondaryGreen'} />
                    <AboutCard shoeImg={product2} containerStyles={'bg-secondaryBlue'} />
                </div>
                <div className="mt-6">
                    <h4 className='medium-28 !font-[700] '> Unveiling Our Journey Crafting The Ultimate Shopping Experience</h4>
                    <div className="">
                        <AboutStats/>
                    </div>
                    <div className='flexCenter gap-4 mt-10'>
                        <div className="">
                            <Button
                            type={'submit'}
                            title={'Start Shopping'}
                            icon={arrowRight}
                            variant={'btn-dark w-48 !px-2'}
                            />
                        </div>
                        <p className="hidden xs:flex ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti excepturi laboriosam impedit enim.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
