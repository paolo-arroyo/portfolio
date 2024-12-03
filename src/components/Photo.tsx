'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1,
            ease: "easeIn",
          },
        }}
      >
        <motion.div 
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 1.4,
              ease: "easeInOut",
            },
          }}
        >
          <Image 
            src="/assets/paolo-arroyo-dev.png"
            alt="Paolo Arroyo is a Full Stack Developer based in the Philippines"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;