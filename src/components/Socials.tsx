import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "" },
  { icon: <FaLinkedinIn />, href: "" },
  { icon: <FaYoutube />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((social, index) => {
        return (
          <Link href={social.href} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Socials;