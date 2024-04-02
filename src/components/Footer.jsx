/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
// import React from 'react'
import footer from "../assets/footer.jpg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constant/data";

const Footer = () => {
  return (
    <>
      <footer className="max-padd-container flexCenter pb-14 pt-20 bg-pattern bg-cover bg-no-repeat ">
        {/* main container */}
        <div className="flex flex-col">
          {/* Footer container column  */}
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 rounded-t-xl">
            <div className="flex flex-wrap gap-16 sm:justify-between md:flex-1">
              <div className="max-w-60">
                {/* logo  */}
                <a href="/" className="bold-24">
                  {" "}
                  <span className="text-secondary bold-36">X</span>Step
                </a>
                <div className="">
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  </p>
                  <img src={footer} alt="" className="rounded-md mt-6 w-44 shadow-md" />
                </div>
              </div>
              {FOOTER_LINKS.map((col) => (
                <FooterColumn key={col.title} title={col.title}>
                  <ul className="flex flex-col gap-4 regular-14 text-gray-20 ">
                    {col.links.map((link)=> (
                      <a key={link} href="/" className="">
                        {link}
                      </a>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link)=>(
                    <a key={link} href="/" className="flex gap-4 md:flex-col lg:flex-row">
                      <p className="">{link.label}</p>
                      <p className="bold-15">{link.value}</p>
                    </a>
                  ))}
                </FooterColumn>
              </div>
              <div className="flex">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="flex gap-4">
                    {SOCIALS.links.map((link)=>(
                      <a key={link} href="" className="text-xl">{link}</a>
                    ))}
                  </ul>

                </FooterColumn>
              </div>

            </div>

          </div>
            {/* copyrights */}
            <p className="font-ace text-white bg-tertirary/90 medium-14 py-2 px-8 rounded-b-xl flexBetween"><span>2024 Xstep</span><span>All Rights reserved</span></p>
            
        </div>
      </footer>
    </>
  );
};

const FooterColumn = ({title, children}) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer;
