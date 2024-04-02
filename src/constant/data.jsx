/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// icons

import {
    
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";

// import images
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import featured1 from '../assets/featured1.png'
import featured2 from '../assets/featured2.png'
import featured3 from '../assets/featured3.png'
import featured4 from '../assets/featured4.png'
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'
import product5 from '../assets/product-5.jpg'
import product6 from '../assets/product-6.jpg'
import product7 from '../assets/product-7.jpg'
import product8 from '../assets/product-8.jpg'

export const LINKS = [
    {
        title: 'home',
        path: 'home',
        offset: -150,
    },
    {
        title: 'featured',
        path: 'featured',
        offset: -150,
    },
    {
        title: 'about',
        path: 'about',
        offset: -150,
    },
    {
        title: 'shop',
        path: 'shop',
        offset: -150,
    },
    {
        title: 'contact',
        path: 'contact',
        offset: -150,
    },

]

export const SHOES = [
    {
        thumbnail:thumbnail1,
        shoe: shoe1,
        title: "basketball shoes",
        price: '$99'
    },
    {
        thumbnail:thumbnail2,
        shoe: shoe2,
        title: "basketball shoes",
        price: '$99'
    },
    {
        thumbnail:thumbnail3,
        shoe: shoe3,
        title: "basketball shoes",
        price: '$99'
    },
]

export const FEATURED = [
    {
        shoe: featured1,
        title: "Nike Air Max",
        price: "99.0",
        bgcolor: "#f42c37",
    },
    {
        shoe: featured2,
        title: "Nike Dunk Low",
        price: "89.0",
        bgcolor: "#fdc62e",
    },
    {
        shoe: featured3,
        title: "Nike Zoom pegasus",
        price: "98.0",
        bgcolor: "#1376f4",
    },
    {
        shoe: featured4,
        title: "Nike Free Run",
        price: "88.0",
        bgcolor: "#2dcc6f",
    },

]


export const SHOP = [
    {
        shoe: product1,
        title: 'Nike Air Max',
        price: '89.00',
    },
    {
        shoe: product2,
        title: 'Nike Dunk Low',
        price: '89.00',
    },
    {
        shoe: product3,
        title: 'Nike Zoom Pegasus',
        price: '89.00',
    },
    {
        shoe: product4,
        title: 'Nike Free Run',
        price: '89.00',
    },
    {
        shoe: product5,
        title: 'Nike Air Max',
        price: '89.00',
    },
    {
        shoe: product6,
        title: 'Nike Free Run',
        price: '89.00',
    },
    {
        shoe: product7,
        title: 'Nike Air Max',
        price: '89.00',
    },
    {
        shoe: product8,
        title: 'Nike Free Run',
        price: '89.00',
    },
]

//Footer Section

export const FOOTER_LINKS = [
    {
        title: "Learn More",
        links: [
            "About Us",
            "Latest Items",
            "Hot Offers",
            "Popular Designs", 
            "FAQ",
            "Privacy Policy",
        ],
    },
    {
        title: "Our Community",
        links: [
            "Terms and Conditions",
            "Special Offers",
            "Customer Reviews",

        ],
    },
];


export const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
        {
            label: "Contact Number",
            value: "123-456-7890"
        },
        {
            label: "Email Address",
            value: "info@xstep.com"
        },
    ]
}

export const SOCIALS = {
    title: "Social",
    links: [
        <FaFacebook/>,
        <FaInstagram/>,
        <FaTwitter/>,
        <FaYoutube/>,
        <FaLinkedin/>,

    ]
}