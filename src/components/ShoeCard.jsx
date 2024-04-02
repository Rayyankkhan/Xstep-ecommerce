/* eslint-disable react/prop-types */
// import React from 'react'

const ShoeCard = ({imgURL, changeShoeImage, shoeImg}) => {

    const handleClick = () => {
        if(shoeImg !== imgURL.shoe) {
            changeShoeImage(imgURL.shoe)
        }
    }
  return (
    <>
      <div className="" onClick={handleClick}>
        <div className="flex flex-col gap-4 md:flex-row cursor-default p-8">
            <div className="h-16 w-16"><img src={imgURL.thumbnail} alt="imgCard" /></div>
            <div className="">
                <h4 className="uppercase medium-14 mt-1">{imgURL.title}</h4>
                <h4 className="medium-20 text-secondary mt-1">{imgURL.price}</h4>
            </div>
        </div>
      </div>
    </>
  )
}

export default ShoeCard
