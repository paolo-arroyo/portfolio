'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaEnvelope, FaMapPin, FaPhone } from 'react-icons/fa6';

import Socials from "@/components/Socials";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'juanpaoloarroyo@gmail.com',
    href: 'mailto:juanpaoloarroyo@gmail.com'
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+63 (906) 272-6619',
    href: 'tel:+639062726619'
  },
  {
    icon: <FaMapPin />,
    title: 'Location',
    value: 'Naga City, Philippines'
  }
];

const SelectService = () => {
  const params = useSearchParams();
  const service = params.get("service");

  return (
    <Select defaultValue={service ?? undefined}>
      <SelectTrigger className="w-full ">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="web-development"> Web Development </SelectItem>
          <SelectItem value="ecommerce-development"> E-Commerce Development </SelectItem>
          <SelectItem value="analytics"> Data & Analytics </SelectItem>
          <SelectItem value="seo"> SEO Optimization </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
              <h3 className="text-4xl font-medium text-accent"> Let&apos;s work together </h3>
              <p className="text-white/60"> Whether you have a project in mind or just want to chat about how we can collaborate, I&apos;d love to hear from you! Let&apos;s create something amazing together. </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="first-name" placeholder="First name" />
                <Input type="last-name" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Suspense>
                <SelectService />
              </Suspense>
              
              <Textarea className="h-[200px]" placeholder="Type your message here. " />
              <Button size="md" className="max-w-40"> Send Message </Button>
            </form>
          </div> 
          <div className="flex flex-col flex-1 items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-4">
              {contactInfo.map((info, index) => {
                return (
                    <li key={index} className="flex items-center gap-4 text-white/80">
                      <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center ">
                        <div className="text-[28px]" >
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 "> {info.title} </p>
                        <a href={info.href}>
                          <h3 className="text-xl hover:text-accent"> {info.value} </h3>
                        </a>
                      </div>
                    </li>
                );
              })}
            </ul>
            <Socials
              containerStyles="flex flex-row gap-8 items-center justify-center py-12 w-full px-4"
              iconStyles="text-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;