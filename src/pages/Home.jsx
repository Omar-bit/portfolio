import React from 'react';
import Section from '../components/Section';
import Article from '../components/Article';
import { IoCodeSharp } from 'react-icons/io5';
import { HiArrowUp } from 'react-icons/hi';
import Glower from '../components/Glower';
import { BsLightbulbFill } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';
import resume from '../assets/omar bouassida resume.pdf';
import memoji from '../assets/memoji.png';
import { MdVerified } from 'react-icons/md';
import { IoShareSocialSharp } from 'react-icons/io5';
import Email from '../assets/mail.png';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import { isMobile } from 'react-device-detect';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GiMeshBall } from 'react-icons/gi';
import nodejs from '../assets/nodejs.png';
import reactjs from '../assets/reactjs.png';
import reactnative from '../assets/reactnative.png';
import expressjs from '../assets/expressjs.png';
import typescript from '../assets/typescript.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import springboot from '../assets/springboot.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';
import git from '../assets/git.png';
import prisma from '../assets/prisma.png';
import nextjs from '../assets/nextjs.png';
import docker from '../assets/docker.png';
import { MdWorkHistory } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';

const projects = [
  {
    icon: MdDownload,
    title: 'Stock Management',
    code: 'https://github.com/Omar-bit/stock-management',
    demo: '',
  },
  {
    icon: MdDownload,
    title: 'BirthMate',
    code: 'https://github.com/Omar-bit/mentalyc',
    demo: 'https://mentalyc-demo.netlify.app/',
  },
  {
    icon: MdDownload,
    title: 'DevLinks',
    code: 'https://github.com/Omar-bit/challengeRBK-devlinks',
    demo: 'https://challenge-rbk.netlify.app/',
  },

  {
    icon: MdDownload,
    title: 'The Blog',
    code: 'https://github.com/Omar-bit/THEBLOG',
    demo: '',
  },

  {
    icon: MdDownload,
    title: 'Tv Shows',
    code: '',
    demo: 'https://bestoftvshowstunisia.netlify.app/',
  },
];
const contacts = [
  {
    icon: Email,
    link: 'bouassidaomar9@gmail.com',
    type: 'email',
  },
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/omar-bouassida-7691aa201/',
    type: 'external',
  },
  {
    icon: Github,
    link: 'https://github.com/Omar-bit',
    type: 'external',
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/omar__bouassida/',
    type: 'external',
  },
];
const technologies = [
  { title: 'Node js', icon: nodejs },
  { title: 'Typescript', icon: typescript },
  { title: 'Express js', icon: expressjs },
  { title: 'React js', icon: reactjs },
  { title: 'React Native', icon: reactnative },
  { title: 'Tailwind css', icon: tailwind },
  { title: 'Python', icon: python },
  { title: 'Java', icon: java },
  { title: 'SpringBoot', icon: springboot },
  { title: 'Mysql', icon: mysql },
  { title: 'MongoDB', icon: mongodb },
  { title: 'Git', icon: git },
  { title: 'Next js', icon: nextjs },
  { title: 'Prisma', icon: prisma },
  { title: 'docker', icon: docker },
];
function Home() {
  return (
    <main className='relative px-3 py-4 md:px-10 md:py-5 w-full min-h-screen bg-black flex flex-col md:flex-row flex-wrap gap-3 overflow-hidden'>
      {/*Section1*/}
      <Section>
        {isMobile && (
          <>
            <OmarDev />
            <Emoji />
          </>
        )}
        <Intro />
        <AboutMe />
        <Resume />
      </Section>

      {/*Section2*/}
      {!isMobile && (
        <Section className='order-first'>
          <OmarDev />
          <Emoji />
          <Contact />
        </Section>
      )}

      {/*Section3*/}
      <Section>
        <Article
          title={
            <span>
              <span className='font-bold'>My </span>Projects
            </span>
          }
          icon={<MdOutlineWorkspacePremium className='size-5' />}
        >
          <div className='space-y-1 mt-3'>
            {projects.map((project) => (
              <div
                key={project.title}
                className='p-2 bg-black rounded-md flex justify-between items-center shadow-md'
              >
                <div className='flex items-center gap-2'>
                  {<project.icon className='size-5' />}
                  <h3 className='text-md font-bold'>{project.title}</h3>
                </div>
                <div className='links flex items-center gap-3'>
                  {project.code && (
                    <a
                      href={project.code}
                      className='text-primary flex items-center gap-1'
                    >
                      <SiGithub className='size-3' />
                      <span> Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className='text-primary flex items-center gap-1'
                    >
                      <FaExternalLinkAlt className='size-3' />
                      <span> Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Article>
        <Article
          icon={<GiMeshBall className=' size-5' />}
          title={
            <span>
              Tech I<span className='font-bold'> Love</span>
            </span>
          }
        >
          <div className='  grid grid-cols-5  gap-2  mt-2'>
            {technologies.map((tech) => (
              <div className=' aspect-square flex items-center justify-center'>
                <img className='  ' src={tech.icon} title={tech.title} />
              </div>
            ))}
          </div>
        </Article>
      </Section>

      {/*Section4*/}
      <Section>
        <Article
          title={
            <span>
              <span className='font-bold'>My</span> Experience
            </span>
          }
          icon={<MdWorkHistory className='size-5' />}
        >
          {' '}
          <div className='space-y-1 mt-3'>
            {[
              {
                year: 'Feb 2024 - Oct 2024',
                title: 'Fullstack developer at Mentalyc Inc',
              },
              {
                year: 'Jan 2024',
                title: 'EPI Digital Minds Hackathon Winner',
              },
              {
                year: 'June 2023 - Aug 2023',
                title: 'Internship at Innovibe',
              },
            ].map((ed) => (
              <div
                key={ed.year}
                className='p-2 bg-black rounded-md flex flex-col  justify-between  shadow-md'
              >
                <div className=' text-xs block'>{ed.year}</div>
                <div className=' block text-sm'>{ed.title}</div>
              </div>
            ))}
          </div>
        </Article>

        <Article
          title={
            <span>
              <span className='font-bold'>My</span> Education
            </span>
          }
          icon={<RiGraduationCapFill className='size-5' />}
        >
          <div className='space-y-1 mt-3'>
            {[
              {
                year: '2022-...',
                title: "Bachelor's Degree in Computer Science, ISITCOM",
              },
              {
                year: '2021-2022',
                title:
                  'Baccalaureate, computer science Section, Lycée Othman chatti msaken',
              },
            ].map((ed) => (
              <div
                key={ed.year}
                className='p-2 bg-black rounded-md flex flex-col justify-between  shadow-md'
              >
                <div className=' text-sm block'>{ed.year}</div>
                <div className=' block text-sm'>{ed.title}</div>
              </div>
            ))}
          </div>
        </Article>

        {isMobile && (
          <>
            <Contact />
          </>
        )}
      </Section>
      <Glower />
    </main>
  );
}

export default Home;
function OmarDev() {
  return (
    <Article classNames='order-first'>
      <div className=' flex items-center justify-center w-full'>
        <h1 className='text-3xl'>
          <span className='font-bold'>Omar</span>
          {'</'}Dev{'>'}
        </h1>
      </div>
    </Article>
  );
}
function Intro() {
  return (
    <Article icon={<IoCodeSharp className='size-5' />}>
      <div className='pt-8'>
        <h3 className='text-md'>
          Web & Mobile<span className=' font-bold'> Developer</span>
        </h3>
        <h4 className='text-md'>
          Cs <span className=' font-bold'> Student</span>
        </h4>
        <h5 className='text-md'>
          Sousse, <span className=' font-bold'> Tunisia</span>
        </h5>
      </div>
    </Article>
  );
}
function AboutMe() {
  return (
    <Article
      title={
        <span>
          <span className=' font-bold'>About</span> Me
        </span>
      }
      icon={<BsLightbulbFill className='size-5 ' />}
    >
      <div className='pt-8'>
        <p className='text-sm'>
          Hi, I'm Omar, a passionate{' '}
          <span className='font-semibold underline'>software developer</span>{' '}
          and <span className='font-semibold underline'>CS student</span> with a{' '}
          <span className='font-semibold underline'>strong background</span> in
          full-stack development. I specialize in building{' '}
          <span className='font-semibold underline'>scalable, efficient</span>{' '}
          web apps. <br />
          My experience includes{' '}
          <span className='font-semibold underline'>freelancing</span>, working
          at <span className='font-semibold underline'>Mentalyc</span>, and
          winning the{' '}
          <span className='font-semibold underline'>
            2023 EPI Digital Minds Hackathon
          </span>
          , sharpening my problem-solving skills. <br />I focus on writing{' '}
          <span className='font-semibold underline'>
            clean, maintainable code
          </span>{' '}
          and delivering impactful solutions. I'm always eager to{' '}
          <span className='font-semibold underline'>
            learn and take on new challenges
          </span>
          . <br />
          Let’s build something amazing together! 🚀
        </p>
      </div>
    </Article>
  );
}
function Resume() {
  return (
    <Article
      classNames='bg-other'
      icon={
        <a href={resume} download>
          <MdDownload className='size-5 ' />
        </a>
      }
    >
      <p>
        {' '}
        <h3 className='text-main text-xl'>
          <span className=' text-main font-bold'>My</span> Resume
        </h3>
      </p>
    </Article>
  );
}
function Emoji() {
  return (
    <Article icon={<MdVerified className='size-5' />}>
      <div className=' flex items-center justify-center w-full'>
        <img src={memoji} alt='memoji' className='size-60' />
      </div>
    </Article>
  );
}
function Contact() {
  return (
    <Article
      footerTitle={
        <h2 className='text-xl  tracking-[2px]'>
          <span className='font-bold'>Contact</span> Me
        </h2>
      }
      icon={<IoShareSocialSharp className='size-5' />}
    >
      <div>
        <div className=' flex items-center  justify-center flex-wrap w-full pb-5'>
          {/* <img src={memoji} alt='memoji' className='size-60' /> */}
          {contacts.map((contact) => (
            <a
              href={contact.link}
              className=' border border-primary rounded-full p-2 m-2'
              key={contact.link}
              {...(contact.type === 'email'
                ? { href: `mailto:${contact.link}` }
                : {})}
            >
              <img src={contact.icon} className='size-8' />
            </a>
          ))}
        </div>
      </div>
    </Article>
  );
}
