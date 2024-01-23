import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { IoInfiniteSharp } from "react-icons/io5";
import dopplerDevops from "../../public/images/dopplerdevops.webp";
import nextPrisma from "../../public/images/next+prisma.webp";
import AvdGoogle from "../../public/images/Avd-gg.webp";
import KubernetesArch from "../../public/images/k8-acrh.webp";
import jenkinsNode from "../../public/images/jenkins+node.webp";
import awsBeanstalk from "../../public/images/aws-Beanstalk.webp";
import ansibleEc2 from "../../public/images/ansible-ec2.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const myServicesData = [
  {
    id: 'frontend',
    color: 'red',
    icon: React.createElement(CodeBracketSquareIcon, {className: "w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"}),
    title: 'Frontend',
    description: 'Proficient in HTML, CSS, JavaScript, ReactJS, NextJS.'
  },
  {
    id: 'backend',
    color: 'yellow',
    icon: React.createElement(CommandLineIcon),
    title: 'Backend',
    description: 'Proficient in server-side programming languages like Python, Golang, or Node.js.'
  },
  {
    id: 'devops',
    color: 'blue',
    icon: React.createElement(IoInfiniteSharp),
    title: 'DevOps',
    description: 'Proficient in devops and experience creating and managing cloud platforms such as AWS, GCP, and Azure.'
  }
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Business Information Technology(BBIT)",
    company: "Kenya Methodist University",
    location: "Nairobi, Kenya",
    description:
      "In my Bachelor of Business Information Technology (BBIT), I focused on blending IT skills with business knowledge, covering data management, software development, and business process understanding.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Fullstack Web Developer",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    description:
      "Trained in a bootcamp, I honed full-stack development skills with tools like Git, JavaScript, Python, and databases such as PostgreSQL and MySQL, building projects using Angular, Flask, and Django.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Full Stack Web Developer",
    company: "Self Employeed",
    location: "Remote",
    description:
      "Full Stack Web Developer with expertise in building functional and scalable web applications. Proficient in DevOps, cloud technologies like AWS, Digital Ocean, and frontend tools including React and React Native.",
    icon: React.createElement(CgWorkAlt),
    tools: "React, React-Native, Docker, AWS, Python, Golang, PHP, Vue",
    date: "Jan 2019 - 2022",
  },
  {
    title: "Front-End Web Developer",
    company: "Savannah Informatics",
    location: "Nairobi, Kenya",
    description:
      "Developed UI interfaces for ERP  software, leveraging frontend tools such as SCSS, HTML, and Angular to ensure an efficient and user-friendly experience.",
    icon: React.createElement(CgWorkAlt),
    tools: "Angular, SCSS, Docker git HTML",
    date: "Jun 2021 - Aug 2021",
  },
  {
    title: "Front-End Web Developer",
    company: "u2i",
    location: "Poland, Remote",
    description:
      "Contributed to the front-end development of 'RetroTool', a SaaS scrum tool, by integrating new features using React and MeteorJS, enhancing its functionality and user experience.",
    icon: React.createElement(CgWorkAlt),
    tools: "ReactJs, SCSS, Meteor js, Express",
    date: "Oct 2021 - Nov 2021",
  },
  {
    title: "Senior Full Stack Developer",
    company: "YLabs",
    location: "California, Remote",
    description:
      "Developing a scalable e-commerce application featuring multiple client-facing interfaces, using Next.js for the web, React Native for mobile, and Express with GraphQL for the backend.",
    icon: React.createElement(CgWorkAlt),
    tools: "NextJs(ReactJs), GraphQl React-Native, AWS",
    date: "Jul 2022 - Dec 2022",
  },
  {
    title: "Technical Writer",
    company: "Medium.com",
    location: "Remote",
    description:
      "As a technical writer, I specialize in covering a wide range of topics from frontend development to DevOps, engaging and educating a diverse tech audience.",
    icon: React.createElement(CgWorkAlt),
    tools: "NextJs(ReactJs), Devops",
    date: "Jun 2020 - Present",
  },
  {
    title: "Senior Full Stack Developer",
    company: "Metaverse Architects",
    location: "Malta, Remote",
    description:
      "Developing a 3D Web3 application with CI/CD integration, deployed on GCP using Next.js, Tailwind, and Express, and connected to Github for easy deployment.",
    icon: React.createElement(FaReact),
    tools: "NextJs(ReactJs), Typescript, Tailwind, GCP, Docker",
    date: "2023 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const blog = [
  {
    title: "DEVOPS WITH DOPPLER (SECOPS)",
    date: "January 4, 2024",
    description:
      "Doppler is a great SecOps tool for managing Keys across multiple Service on teh cloud",
    link: "https://medium.com/@ianodad/devops-with-doppler-d12bdf78df84",
    tags: ["DevOps", "Doppler", "SecOps"],
    views: 1.3,
    reads: 586,
    imageUrl: dopplerDevops,
  },
  {
    title: "BUILDING A MVC APPLICATION WITH NEXTJS AND PRISMA",
    date: "May 31, 2022",
    description: "How to setup a MVC on NextJs 12 for a fullstack development",
    link: "https://medium.com/@ianodad/building-a-mvc-application-with-nextjs-and-prisma-a4be9276b9f2",
    tags: ["DevOps", "Azure"],
    views: 6.6,
    reads: 3.7,
    imageUrl: nextPrisma,
  },
  {
    title: "HOW TO ADD GOOGLE SERVICES ON AN AVD EMULATOR DEVICE",
    date: "Apr 19, 2022",
    description:
      "Step by step to adding google services on an system image on android studio",
    link: "https://medium.com/@ianodad/how-to-add-google-services-on-an-avd-emulator-device-f6bffc1da144",
    tags: ["Android", "React-Native"],
    views: 92,
    reads: 52,
    imageUrl: AvdGoogle,
  },
  {
    title: "Kubernetes Architecture",
    date: "Oct 13, 2021",
    description:
      "This is a high overview i=fo kubernetes and how the architecture looks",
    link: "https://medium.com/@ianodad/kubernetes-architecture-7ef0ab79ed16",
    tags: ["DevOps", "K8"],
    views: 514,
    reads: 233,
    imageUrl: KubernetesArch,
  },
  {
    title: "Integrating Jenkins with a Nodejs project.",
    date: "Oct 23, 2020",
    description:
      "This is how to create a jenkins build with nodeJs for automatic deployment",
    link: "https://medium.com/dev-genius/cloud-computing-b8f0736482a5",
    tags: ["DevOps", "Jenkins", "Node"],
    views: 13.9,
    reads: 8.8,
    imageUrl: jenkinsNode,
  },
  {
    title: "CI/CD with AWS Elastic Beanstalk",
    date: "August 19th, 2020",
    description:
      "Setting up a react Devops setup with Travis-Ci with Elastic Beanstalk",
    link: "https://medium.com/dev-genius/ci-cd-with-aws-elasticsbeanstalk-and-travis-ci-6bdd40dbf748",
    tags: ["DevOps", "AWS", "Docker"],
    views: 1.7,
    reads: 757,
    imageUrl: awsBeanstalk,
  },
  {
    title: "How to install Ansible 2 on AWS Linux 2 (EC2)",
    date: "May 16, 2020",
    description: "A step-by-step guide for installing Ansible 2 on AWS EC2",
    link: "https://medium.com/p/ba0ffde42792q",
    tags: ["DevOps", "AWS", "Linux"],
    views: 8.3,
    reads: 5.7,
    imageUrl: ansibleEc2,
  },
] as const;
