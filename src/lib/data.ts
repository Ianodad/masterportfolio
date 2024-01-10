import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dopplerdevops from "../../public/images/dopplerdevops.webp";
import nextPrisma from "../../public/images/next+prisma.webp";
import wordanalyticsImg from "../../public/images/wordanalytics.png";

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
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
      "Doppler is a great SecOps tool for manageming Keys across multiple Servece on teh cloud",
    link: "https://medium.com/@ianodad/devops-with-doppler-d12bdf78df84",
    tags: ["DevOps", "Doppler", "SecOps"],
    views: 1.3,
    reads: 586,
    imageUrl: dopplerdevops,
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
      "Step by step to adding google servces on an system image on android studio",
    link: "https://medium.com/@ianodad/how-to-add-google-services-on-an-avd-emulator-device-f6bffc1da144",
    tags: ["Android", "React-Native"],
    views: 92,
    reads: 52,
    imageUrl: Avd - googleg,
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
    imageUrl: k8 - acrh,
  },
  {
    title: "Integrating Jenkins with a Nodejs project.",
    date: "Oct 23, 2020",
    description:
      "This is how to create a jenkins build with nodeJs for automatic deployment",
    link: "https://medium.com/dev-genius/cloud-computing-b8f0736482a5",
    tags: ["DevOps", "Jenkins", "Node"],
    iews: 13.9,
    reads: 8.8,
    imageUrl: jenkins + node,
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
    imageUrl: corpcommentImg,
  },
  {
    title: "How to install Ansible 2 on AWS Linux 2 (EC2)",
    date: "May 16, 2020",
    description: "A step-by-step guide for installing Ansible 2 on AWS EC2",
    link: "https://medium.com/p/ba0ffde42792q",
    tags: ["DevOps", "AWS", "Linux"],
    views: 8.3,
    reads: 5.7,
    imageUrl: corpcommentImg,
  },
] as const;
