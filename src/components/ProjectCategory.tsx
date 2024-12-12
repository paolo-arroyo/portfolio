import React from 'react';
import { FaShoppingCart, FaTrophy } from 'react-icons/fa';
import { FiLayout } from 'react-icons/fi';
import { MdArchitecture } from 'react-icons/md';
import { RiStackFill } from 'react-icons/ri';

const projectCategory = {
  ecommerce: {
    name: 'E-Commerce',
    icon: <FaShoppingCart />
  },
  fullstack: {
    name: 'Fullstack',
    icon: <RiStackFill />
  },
  awardee: {
    name: 'Award-Winning',
    icon: <FaTrophy />
  },
  frontend: {
    name: 'Frontend',
    icon: <FiLayout />
  },
  mach: {
    name: 'MACH Architecture',
    icon: <MdArchitecture />
  },
};

export type Category = keyof typeof projectCategory;

type ProjectCategoryProps = {
  categories: Category[];
}

const ProjectCategory = ({ categories }: ProjectCategoryProps) => {
  if (!categories) return null;
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {categories.map((category, index) => {
        return (
          <span key={index} className="text-accent text-sm font-semibold bg-accent/10 px-2 py-1 rounded-full flex flex-row items-center gap-2">
            {projectCategory[category].icon ? projectCategory[category].icon : null}
            {projectCategory[category].name}
          </span>
        )
      })}
    </div>
  )
}

export default ProjectCategory;