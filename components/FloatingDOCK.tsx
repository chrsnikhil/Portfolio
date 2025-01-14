import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Fa500Px, FaAcquisitionsIncorporated, FaAddressCard, FaGithub, FaHome, FaInstagram, FaLinkedin, FaLinkedinIn, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { SiAmazondocumentdb, SiDuolingo, SiFiles, SiGmail, SiReactiveresume, SiStandardresume } from "react-icons/si";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Github",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/chrsnikhil",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/chris-nikhil-6883ba290/",
    },
    {
      title: "+917305025707",
      icon: (
        <FaWhatsapp
           className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://wa.me/917305025707",
    },

    {
      title: "Email",
      icon: (
        <SiGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:chrsnikhil@gmail.com",
    },

    {
      title: "DuoLingo",
      icon: (
        <SiDuolingo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.duolingo.com/profile/Nikhil404588",
    },
    {
      title: "Resume",
      icon: (
        <SiFiles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
