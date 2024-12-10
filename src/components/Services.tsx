'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight, BsGlobe2 } from 'react-icons/bs';

type ServicesProps = {
  services: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
  }[];
};

const Services = ({ services }: ServicesProps) => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div key={index} className="flex flex-1 flex-col justify-start gap-6 group">
              <div className="flex flex-col gap-8 group/link">
                <div className='w-full flex justify-between items-center'>
                  <div className="text-4xl font-extrabold text-outline"> {service.icon} </div>
                  <Link href={service.href} className="w-[28px] h-[28px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center group-hover/link:-rotate-45">
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <Link href={service.href} className="group/link group-hover:text-accent">
                  <h2> {service.title} </h2>
                </Link>
              </div>
              <p className="h-full text-white/80"> {service.description} </p>
              <div className="border-b border-white/20 w-full" />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Services;