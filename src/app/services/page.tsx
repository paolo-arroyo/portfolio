'use client';

import { default as Services } from "@/components/Services";
import { BsGlobe2, BsShop, } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { PiRankingFill } from "react-icons/pi";

const services = [
  {
    icon: <BsGlobe2 />,
    title: 'Web Development',
    description: 'I build websites, landing pages, and web applications that are fast, secure, and responsive.',
    href: '/services/web-development',
  },
  {
    icon: <BsShop />,
    title: 'E-Commerce Development',
    description: 'I specialize in building e-commerce websites using Shopify and other platforms.',
    href: '/services/web-development',
  },
  {
    icon: <IoMdAnalytics />,
    title: 'Data & Analytics',
    description: 'I equip websites with analytics tools to track user behavior and improve sales and marketing performance.',
    href: '/services/web-design',
  },
  {
    icon: <PiRankingFill />,
    title: 'SEO Optimization',
    description: 'I optimize websites for search engines to improve their visibility and ranking.',
    href: '/services/seo-optimization',
  }
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <Services services={services} />
    </section>
  )
}

export default ServicesPage;