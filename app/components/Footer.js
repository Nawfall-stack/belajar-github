import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Links = ({ title, links }) => {
  return (
    <ul className="footer-links space-y-4 w-[150px] my-2">
      <li className="uppercase text-blue-500  font-semibold">{title}</li>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="hover:underline">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SocialIcons = ({ icons }) => {
  return (
    <>
      {icons.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="w-8 h-8 p-1.5 text-black bg-white border border-black/20 rounded-2xl 
                       hover:bg-blue-500 hover:text-white hover:border-transparent 
                       transition-all duration-300 cursor-pointer"
          />
        </Link>
      ))}
    </>
  );
};

const Footer = () => {
  const linkGroups = [
    {
      title: 'Company',
      links: ['About', 'Features', 'Works', 'Career'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'FAQ', 'Contact', 'Live Chat'],
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licensing'],
    },
  ];

  const socialIcons = [
  { icon: faTwitter, url: "https://twitter.com/username_kamu" },
  { icon: faFacebookF, url: "https://facebook.com/username_kamu" },
  { icon: faInstagram, url: "https://www.instagram.com/naw_fall9104/" },
  { icon: faGithub, url: "https://github.com/username_kamu" },
];

  return (
    <footer className="footer bg-white text-black p-8 flex flex-col gap-10 justify-center snap-center">
      <div className="footer-wrapper flex flex-col gap-8 justify-evenly lg:flex-row items-start">
        <div className="footer-items flex flex-col gap-8">
          <div className="footer-logo flex items-center gap-2 ">
            <svg className="w-6 h-6" viewBox="0 0 91 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M54.8084 49.0625H72.995L63.7938 33.125L72.454 28.125L90.3163 59.0625H59.5311L70.6034 82.5L0 83.1469L6.33013 72.1828L54.8202 72.5L48.4725 59.0625L13.4559 59.0625L38.7977 15.1699L54.8084 49.0625ZM30.7772 49.0625L43.7489 49.0625L37.911 36.7041L30.7772 49.0625ZM67.0418 18.75L58.3817 23.75L47.5555 5L56.2166 0L67.0418 18.75Z"
                fill="black"
              />
            </svg>
            <h1 className=" text-2xl font-medium">Nawfall</h1>
          </div>
          <div className="footer-subtitle">
            <p className=" text-lg">Clarity gives you the blocks and components you need to create a truly professional website.</p>
          </div>
          <div className="footer-socmed flex gap-2">
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
        <div className="footer-items flex flex-wrap gap-4 md:justify-between lg:flex-nowrap lg:gap-8">
          {linkGroups.map((group, index) => (
            <Links key={index} title={group.title} links={group.links} />
          ))}
        </div>
      </div>
      <p className=" text-center">© Copyright 2022, All Rights Reserved by ClarityUI</p>
    </footer>
  );
};

export default Footer;
