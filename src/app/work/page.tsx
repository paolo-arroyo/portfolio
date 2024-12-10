'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { BsArrowRight, BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Novita Knits',
    description: 'Novita Knits is the largest knitting supplier in Western Europe. Alongside e-commerce consultants and their in-house development team, I helped build a new e-commerce solution for their online store using a cutting-edge approach with Shopify Hydrogen and Sanity CMS. Novita won the Grand One Finland Award for Best in User Experience, Best Technical Implementation, and three other categories.',
    category: ['E-Commerce', 'Fullstack', 'Team'],
    image: '/assets/project-novita.jpg',
    href: 'https://novita.com',
    stack: ['remix', 'react', 'shopify', 'hydrogen', 'typescript', 'tailwind', 'sanity'],
  },
  {
    title: 'Origin USA',
    description: 'Origin USA is a premier manufacturer of American-made fitness equipment. I worked with their in-house development team develop new features for their Shopify store, including a redesign of the produt and collection pages. I also helped optimize their site for performance and SEO.',
    category: ['E-Commerce', 'Fullstack'],
    image: '/assets/portfolio.png',
    href: 'https://novita.com',
    stack: ['react', 'shopify', 'javascript', 'tailwind'],
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-start gap-6 order-2 xl:order-none">
            <div className="flex flex-row gap-4">
              {activeProject.category.map((category, index) => {
                return (
                  <span key={index} className="text-accent text-sm font-semibold bg-accent/10 px-2 py-1 rounded-full"> {category}</span>
                )
              })}
            </div>
            <Link href={activeProject.href}>
              <h2 className="text-4xl font-bold hover:text-accent transition-all duration-300">
                {activeProject.title} 
              </h2>
            </Link>
            <p className="text-white/80">
              {activeProject.description}
            </p>
            <div className="flex flex-row gap-4">
              {activeProject.stack.map((stack, index) => {
                return (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="">
                          {stack}
                        </div>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
            <Link href={activeProject.href}>
              <Button className="text-sm">
                <span>Visit Site</span>
                <BsArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="w-full xl:w-1/2">
              
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;