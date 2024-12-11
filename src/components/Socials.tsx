import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaThreads, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaGithub />, href: "https//github.com/paolo-arroyo", color: "hover:text-[#6e5494]" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/paolorarroyo", color: "hover:text-[#0077b5]" },
  { icon: <FaFacebook />, href: "https://facebook.com/juppyrarroyo", color: "hover:text-[#1877f2]" },
  { icon: <FaWhatsapp />, href: "https://wa.me/639062726619", color: "hover:text-[#25d366]" },
  { icon: <FaInstagram />, href: "https://instagram.com/juppyarroyo", color: "hover:text-[#c13584]" },
  { icon: <FaThreads />, href: "https://www.threads.net/@juppyarroyo", color: "hover:text-[#0084ff]" },
  { icon: <FaXTwitter />, href: "https://x.com/paoloarroyo_", color: "hover:text-[#1da1f2]" },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
  take?: number;
};

const Socials = ({ containerStyles, iconStyles, take }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socialLinks.slice(0, take ? take : socialLinks.length).map((social, index) => {
        return (
          <Link href={social.href} key={index} className={`${iconStyles} ${social.color}`}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Socials;