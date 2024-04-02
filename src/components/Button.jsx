// import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({type, title, icon, variant}) => {
  return (
    <>
      <button className={`flexCenter gap-2 border rounded-full cursor-pointer ${variant}`} type={type}>
        <label htmlFor="" className="cursor-pointer">{title}</label>
        {icon && <img src={icon} alt={title} width={20} height={20}/>}
      </button>
    </>
  )
}

export default Button
