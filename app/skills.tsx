"use client";

import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { SkillCard } from "../components/home/skill-card";

const SKILLS = [
  {
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {   
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },  
  {   
      title: "Frontend Web Development:",
      children:
        "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
  ];
  
  export function Skills() {
    return (
      <section className="px-8">
        <div className="container mx-auto mb-20 text-center"> 
          <h1
            className="inter.variable animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            My skills
          </h1>
          <h1
            className="montserrat.variable animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            My skills
          </h1> 
          <h1 
            className="montserrat.variable animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] text-[#1d9bf0]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Repositorio
          </h1>  
          
          <Typography color="red" className="z-10 w-full mb-2 font-bold uppercase">
            my skills
          </Typography>
          <Typography variant="h1" color="blue-gray" className="mb-4">
            What I do
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12"
          >
            I&apos;m not just a developer; I&apos;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my
            calling. Discover below how I can help you.
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;