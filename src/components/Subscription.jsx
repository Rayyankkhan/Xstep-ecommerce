// import React from 'react'

import Button from "./Button"
import FadeIn from './FadeIn';

// framer motion 
import { motion } from 'framer-motion';

const Subscription = () => {
  return (
    <>
      <div className="pt-20" id="contact">
        <div className="max-padd-container flexCenter flex-col lg:flow-row gap-8 py-8 bg-tertirary">
            <motion.h3
               variants={FadeIn("right", 1)}
               initial="hidden"
               whileInView="show"
               exit="hidden"
            className="medium-32 leading-none font-ace text-primary">Get Latest News Updates</motion.h3>
            <motion.div
               variants={FadeIn("left", 1)}
               initial="hidden"
               whileInView="show"
               exit="hidden"
            className="flexBetween bg-white px-1 py-1 rounded-full">
                <input type="email" placeholder="Your Email" className="pl-4 border-none outline-none w-56 xl:w-80 bg-transparent" />
                <Button
                type={'submit'}
                title={'Subscribe'}
                variant={'btn-dark'}
                />
            </motion.div>
        </div>
      </div>
    </>
  )
}

export default Subscription
