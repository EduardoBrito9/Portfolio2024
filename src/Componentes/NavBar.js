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
    <nav>
      <h1 className=" text-2xl">Eduardo 👨🏻‍💻</h1>
      <div>
        {socials.map((media) => {
          const Icon = media.Icon;
          return (
            <a key={media.label} href={media.link} label={media.label}>
              <Icon />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
