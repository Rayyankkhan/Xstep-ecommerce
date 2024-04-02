/* eslint-disable react/prop-types */
// import React from 'react'

import Button from "./Button"
import opencart from '../assets/opencart.svg'

const AboutCard = ({shoeImg, containerStyles}) => {
  return (
    <>
     <div className={`${containerStyles} flexBetween gap-4 text-primary rounded-2xl p-3 shadow-sm `}>
        <div className="pl-2">
            <h4 className="medium-16">Nike Neon pegasus</h4>
            <h5 className="font-semibold">$99.00</h5>
            <Button
            type={'submit'}
            title={'Add to'}
            icon={opencart}
            variant={'btn-white !py-1 !px-3 !text-xs !mt-3'}
            />
        </div>
        <div className="">
            <img src={shoeImg} alt="" className="rounded-xl w-24 h-24" />
            </div>
        </div> 
    </>
  )
}

export default AboutCard
