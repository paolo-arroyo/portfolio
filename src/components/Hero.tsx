import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Photo from './Photo';
import Socials from './Socials';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:pt-8 xl:pb-24">
      <div className="text-center xl:text-left flex flex-col gap-4 order-2 xl:order-1">
        <h3>Hi! I&apos;m <span className="text-accent"> Paolo Arroyo</span>, & </h3>
        <h1 className="text-6xl after:whitespace-nowrap tracking-tighter">I build <span className="text-accent">websites</span></h1>
        <p className="max-w-[600px] mb-9 text-white/80">
          I&apos;m a web developer based in the Philippines. I specialize in building e-commerce websites and web applications using modern technologies like <span className="text-[#00d8ff] font-semibold">React</span>, <span className="font-semibold text-[#FECC1B]">Remix</span>, <span className="font-semibold text-[#F77BF6]">Next.js</span> and <span className="font-semibold text-[#96bf48]">Shopify Liquid/Hydrogen</span>.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
          >
            <span> Download CV </span>
            <FiDownload className="text-xl ml-2" />
          </Button>
          <div className="mb-8 xl:mb-0">
            <Socials
              take={2}
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <div className="order-1 xl:order-2">
        <Photo />
      </div>
    </div>
  )
}

export default Hero;