'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { BsArrowRight } from 'react-icons/bs';

import ProjectCategory, { type Category } from '@/components/ProjectCategory';
import ProjectStack from '@/components/ProjectStack';
import SliderButtons from '@/components/SliderButtons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  categories: Category[];
  image: string;
  imagePosition?: string;
  href: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'Novita Knits',
    description: 'Novita Knits is the largest knitting supplier in Western Europe. Alongside e-commerce consultants and their in-house development team, I helped build a new e-commerce solution for their online store using a cutting-edge approach with Shopify Hydrogen and Sanity CMS. Novita won the Grand One Finland Award for Best in User Experience, Best Technical Implementation, and three other categories.',
    categories: ['ecommerce', 'fullstack', 'awardee'],
    image: '/assets/project-novita.jpg',
    imagePosition: 'object-right',
    href: 'https://novita.com',
    stack: ['hydrogen', 'remix', 'react', 'typescript', 'tailwind', 'sanity', 'html', 'css'],
  },
  {
    title: 'Marimekko',
    description: 'I was part of the multinational team that helped Marimekko, a Finnish design house and international lifestyle brand, integrate their e-commerce systems following MACH architecture principles.',
    categories: ['mach', 'ecommerce', 'fullstack'],
    image: '/assets/project-marimekko.jpg',
    imagePosition: 'object-center',
    href: 'https://marimekko.com',
    stack: ['next', 'contentful', 'typescript', 'tailwind', 'sanity', 'html', 'css'],
  },
  {
    title: 'Origin USA',
    description: 'Origin USA is a premier manufacturer of American-made fitness equipment. I worked with their in-house development team to develop new features for their Shopify store. I also helped optimize their site for performance and SEO.',
    categories: ['ecommerce', 'fullstack'],
    image: '/assets/project-origin.png',
    imagePosition: 'object-left',
    href: 'https://originusa.com',
    stack: ['react', 'shopify', 'javascript', 'tailwind'],
  },
  {
    title: 'Lintbells Veterinary',
    description: 'Lintbells Veterinary is a leading pet supplement brand in the UK. I worked with their in-house development team to build a new Shopify store with analytics and tracking features.',
    categories: ['ecommerce', 'fullstack'],
    image: '/assets/project-lintbells.png',
    imagePosition: 'object-left',
    href: 'https://lintbellsvet.com',
    stack: ['shopify', 'typescript', 'tailwind', 'googleanalytics', 'html', 'css'],
  },
  {
    title: 'Honest Paws',
    description: 'As Senior Engineer at One Pet, I helped build and optimize the Honest Paws e-commerce store on Shopify, including bespoke product page and subscription features that improved conversion rates by approximately 40%.',
    categories: ['ecommerce', 'frontend'],
    image: '/assets/project-honest-paws.png',
    imagePosition: 'object-left',
    href: 'https://honestpaws.com',
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
      animate={{ 
        opacity: 1,
        transition: {
          delay: 0.8, duration: 0.4, ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-start gap-6 order-2 xl:order-none">
            <ProjectCategory categories={activeProject.categories} />
            <a href={activeProject.href} target="_blank">
              <h2 className="text-4xl font-bold hover:text-accent transition-all duration-300">
                {activeProject.title} 
              </h2>
            </a>
            <p className="text-white/80 text-base">
              {activeProject.description}
            </p>
            <ProjectStack stack={activeProject.stack} />
            <div className="border border-white/20 w-full" />
            <a href={activeProject.href} target='_blank'>
              <Button className="text-sm">
                <span>Visit Site</span>
                <BsArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-md">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full rounded-md">
                        <Image 
                          src={project.image}
                          fill
                          className={`object-cover rounded-md ${project.imagePosition}`}
                          alt={project.title} 
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full xl:justify-none xl:w-max justify-between xl:justify-none gap-4"
                iconStyles=""
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-sm flex justify-center items-center transition-all disabled:opacity-50"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;