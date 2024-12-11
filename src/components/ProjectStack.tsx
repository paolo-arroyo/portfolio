import React from 'react';

import { FaAws, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaShopify } from 'react-icons/fa';
import { RiRemixRunFill } from 'react-icons/ri';
import { SiContentful, SiGoogleanalytics, SiMongodb, SiNextdotjs, SiSanity, SiTailwindcss, SiTypescript } from 'react-icons/si';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type StackIcon = {
  [key: string]: {
    icon: JSX.Element;
    color: string;
    tooltip: string;
  };
};

const stackIcons: StackIcon = {
  react: {
    icon: <FaReact />,
    color: "text-[#61dbfb]",
    tooltip: 'React'
  },
  next: {
    icon: <SiNextdotjs />,
    color: "text-[#FFFFFF]",
    tooltip: 'Next.js'
  },
  node: {
    icon: <FaNodeJs />,
    color: "text-[#68a063]",
    tooltip: 'Node.js'
  },
  typescript: {
    icon: <SiTypescript />,
    color: "text-[#007acc]",
    tooltip: 'TypeScript'
  },
  css: {
    icon: <FaCss3 />,
    color: "text-[#1572b6]",
    tooltip: 'CSS3'
  },
  html: {
    icon: <FaHtml5 />,
    color: "text-[#e34f26]",
    tooltip: 'HTML5'
  },
  javascript: {
    icon: <FaJsSquare />,
    color: "text-[#f7df1e]",
    tooltip: 'JavaScript'
  },
  mongodb: {
    icon: <SiMongodb />,
    color: "text-[#13aa52]",
    tooltip: 'MongoDB'
  },
  sanity: {
    icon: <SiSanity />,
    color: "text-[#F77769]",
    tooltip: 'Sanity'
  },
  contentful: {
    icon: <SiContentful />,
    color: "text-[#ffda03]",
    tooltip: 'Contentful'
  },
  aws: {
    icon: <FaAws />,
    color: "text-[#ff9900]",
    tooltip: 'AWS'
  },
  shopify: {
    icon: <FaShopify />,
    color: "text-[#95BF47]",
    tooltip: 'Shopify'
  },
  hydrogen: {
    icon: <FaShopify />,
    color: "text-[#20bcfc]",
    tooltip: 'Shopify Hydrogen'
  },
  remix: {
    icon: <RiRemixRunFill />,
    color: "text-[#f6f7f8]",
    tooltip: 'Remix'
  },
  tailwind: {
    icon: <SiTailwindcss />,
    color: "text-[#06b6d4]",
    tooltip: 'Tailwind CSS'
  },
  googleanalytics: {
    icon: <SiGoogleanalytics />,
    color: "text-[#f4b400]",
    tooltip: 'Google Analytics'
  },
};

type ProjectStackProps = {
  stack: string[];
};

const ProjectStack = (stack: ProjectStackProps) => {
  return (
    <div className="flex flex-row gap-4">
      {stack.stack.map((tech, index) => {
        return (
          <TooltipProvider key={index} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <div className={`w-8 h-8 text-3xl rounded-full flex items-center justify-center ${stackIcons[tech].color}`}>
                  {stackIcons[tech].icon}
                </div>
              </TooltipTrigger>
              <TooltipContent className={`${stackIcons[tech].color}`}>
                {stackIcons[tech].tooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div> 
  );
}

export default ProjectStack;