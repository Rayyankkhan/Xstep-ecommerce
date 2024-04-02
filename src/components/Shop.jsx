import {VscSettings} from 'react-icons/vsc'
import { SHOP } from '../constant/data';
import Button from './Button';
import opencartwhite from '../assets/opencartwhite.svg'
import FadeIn from './FadeIn';

// framer motion 
import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <>
      <section className="max-padd-container pb-16 xl:pb-32 pt-14" id='shop'>
        {/* title */}
        <motion.div 
           variants={FadeIn("right", 1)}
           initial="hidden"
           whileInView="show"
           exit="hidden"
        className="flexBetween">
          <h4 className="text-4xl font-ace leading-none flex flex-col items-end pb-12 ">
            Popular <span className="medium-16">Collection</span>
          </h4>
          <a href="/" className="text-3xl bg-tertirary rounded-md h-10 w-10 p-2 text-white relative bottom-7">
            <VscSettings/>
          </a>
        </motion.div>
    


        {/* container  */}
        <motion.div
           variants={FadeIn("left", 1)}
           initial="hidden"
           whileInView="show"
           exit="hidden"
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {SHOP.map((product, i) => (
                <div key={i} className="" >
                    <div className='overflow-hidden rounded-3xl group'>
                        <div className='overflow-hidden relative '>
                            <img src={product.shoe} alt={product.title} className='w-[31rem] h-auto rounded-3xl group-hover:scale-105 transition-all duration-500'/>
                            <h4 className="medioum-16 capitalize absolute top-3 left-6">{product.title}</h4>
                            <div className="flexBetween justify-center gap-x-4 w-full px-6 py-2 absolute bottom-2">
                                <span className='medium-20 '><span className='regular-14'>$</span>{product.price}</span>
                                <Button
                                type={'submit'}
                                title={'Add to cart'}
                                icon={opencartwhite}
                                variant={'btn-secondary !py-2 !px-4 text-xs'}
                                />
                            </div>
                            </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </section>
    </>
  );
};

export default Shop;
