// import React from 'react'
import { BsFire } from "react-icons/bs";
import Button from "./Button";
import arrowRight from "../assets/arrow-right.svg";
import shoe1 from "../assets/shoe1.png";
import { SHOES } from "../constant/data";
import ShoeCard from "./ShoeCard";
import { useState } from "react";

//framer motion
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const Hero = () => {
  const [shoeImg, setShoeImg] = useState(shoe1);
  return (
    <>
      <section
        className="max-padd-container xl:h-screen py-16 xl:py-32"
        id="home"
      >
        <div className="flex flex-col gap-6 xl:flex-row relative top-28 xl:top-36">
          {/* left */}
          <motion.div
            variants={FadeIn("left", 1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="flex flex-1 flex-col max-w-[666px]"
          >
            <h4 className="flex items-baseline gap-x-2 uppercase text-secondary medium-18">
              MODERN COLLECTION <BsFire />
            </h4>
            <h2 className="h1 uppercase ">2024 COLLECTION FOR GENTS</h2>
            <p className="border-l-4 border-secondary pl-3 my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              tenetur cumque ea omnis, voluptate consectetur veniam
              reprehenderit, laboriosam incidunt deserunt cum quas minus quam,
              explicabo dicta vitae quae accusamus. Nihil.
            </p>
            <div className="mt-4 z-10">
              <Button
                type={"submit"}
                title={"Start Shopping"}
                icon={arrowRight}
                variant={"btn-secondary"}
              />
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{
              scale: 0.2,
            }}
            whileInView={{
              scale: 1,
              duration: 5,
            }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex justify-center flex-1"
          >
            <img
              src={shoeImg}
              alt="shoeImg"
              className="h-[20rem] xl:h-[27rem] w-auto drop-shadow-2xl "
            />
          </motion.div>
        </div>

        {/* bottom */}
        <motion.div
          variants={FadeIn("right", 1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="relative"
        >
          <div className="flexBetween  xl:gap-x-4 w-full relative top-24 bg-primary/50 z-30">
            {SHOES.map((shoe, i) => (
              <div key={i}>
                <ShoeCard
                  imgURL={shoe}
                  changeShoeImage={(shoe) => setShoeImg(shoe)}
                  shoeImg={shoeImg}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
