import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/eduardo-paulino-brito/",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/EduardoBrito9",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://twitter.com/duubritoo_",
      label: "X",
      Icon: FaTwitter,
    },
  ];
  return (
    <nav className=" flex justify-between py-10 items-center">
      <h1 className=" text-2xl font-bold underline underline-offset-8  decoration-green-500 -rotate-2">
        Eduardo 👨🏻‍💻
      </h1>
      <div className=" flex gap-5">
        {socials.map((media) => {
          const Icon = media.Icon;
          return (
            <a key={media.label} href={media.link} label={media.label}>
              <Icon className=" w-6 h-6 hover:scale-125 transition" />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
