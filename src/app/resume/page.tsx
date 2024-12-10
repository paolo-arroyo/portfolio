'use client';

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaUserGraduate } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineBadge } from "react-icons/md";

import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Socials from '@/components/Socials';
import { motion } from 'framer-motion';

// About Data
const about = {
  title: 'About Me',
  description: 'I am a Full Stack Developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies including React, Node.js, and MongoDB. I am always looking to learn new things and improve my skills.',
  info: [
    {
      field: "Name",
      value: "Paolo Arroyo",
    },
    {
      field: "Email",
      value: "juanpaoloarroyo@gmail.com",
      href: "mailto:juanpaoloarroyo@gmail.com",
    },
    {
      field: "Phone",
      value: "+63 (906) 272-6619",
      href: "tel:+639062726619",
    },
    {
      field: "Skype",
      value: "live:juanpaoloarroyo",
      href: "skype:live:juanpaoloarroyo?chat",
    },
    {
      field: "Location",
      value: "Philippines",
    }
  ]
};

// Work Experience
const experience = {
  icon: <MdOutlineBadge />,
  title: 'Work Experience',
  description: 'Here are some of the companies I\'ve worked with over the years to deliver world-class online experiences.',
  items: [
    {
      company: 'One Pet',
      position: 'Senior Shopify Engineer',
      date: '2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac sapien nec nunc',
    },
    {
      company: 'IONA Commerce',
      position: 'Full Stack Engineer',
      date: '2023-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac sapien nec nunc',
    },
    {
      company: 'Rathwood',
      position: 'Lead Shopify Engineer',
      date: '2021-2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac sapien nec nunc',
    },
    {
      company: 'Reel Unlimited',
      position: 'Full Stack Developer',
      date: '2019-2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac sapien nec nunc',
    },
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      date: '2019-Present'
    }
  ],
};

// Education
const education = {
  icon: <FaUserGraduate />,
  title: 'Training & Education',
  description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, a!',
  items: [
    {
      institution: 'University of Helsinki',
      degree: 'Full Stack Open',
      duration: '2023',
    },
    {
      institution: 'Colt Steele',
      degree: 'Web Development Bootcamp',
      duration: '2022',
    },
    {
      institution: 'Ateneo De Naga University',
      degree: 'Bachelor of Science in Marketing',
      duration: '2018',
    }
  ]
};

// Skills
const skills = {
  icon: <GiSkills />,
  title: 'Skills',
  description: 'Here are some of the technologies I have experience working with.',
  items: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      years: 8,
      rating: '9.5/10'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
      years: 8,
      rating: '9/10'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      years: 7,
      rating: '9/10',
    },
    {
      icon: <FaReact />,
      name: 'React',
      years: 5,
      rating: '8.5/10',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      years: 4,
      rating: '8/10',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      years: 5,
      rating: '8.5/10'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind',
      years: 5,
      rating: '9/10'
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] xl:max-w-[1/4] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/90 text-sm">{item.field}</span>
                        <span className="text-accent/75 text-lg"> {item.value} </span>
                      </li>
                    );
                  })}
                </ul>
                <Socials
                  containerStyles="flex flex-row w-full py-4 justify-start gap-6 items-center"
                  iconStyles="text-3xl text-white hover:text-accent"
                />
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 list-none">
                          <span className="text-accent"> {item.date} </span>
                          <h3 className="text-xl max-w-[260px]  text-center lg:text-left"> {item.position} </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <span className="text-white"> {item.company} </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {skills.description} </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-[30px]">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index} className="flex justify-center lg:justify-start">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl xl:text-6xl flex flex-row items-center justify-center group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-white/80 flex justify-between gap-4">
                                <span className="text-accent font-bold">{item.name} </span>
                                {item.years} yrs 
                                <span className="text-accent/80">{item.rating}</span>
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 list-none">
                          <span className="text-accent"> {item.duration} </span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left"> {item.degree} </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <span className="text-white"> {item.institution} </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div> 
  )
}

export default Resume;