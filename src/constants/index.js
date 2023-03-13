import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    microsoft,
    pb,
    ceta,
    ecell,
    vocal,
    EdocX,
    EdocX2,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Speaker",
      icon: mobile,
    },
    {
      title: "Programmer",
      icon: backend,
    },
    {
      title: "Business Lead",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Campus Business Manager",
      company_name: "PrepBytes",
      icon: pb,
      iconBg: "#383E56",
      date: "December 2021 - July 2022",
      points: [
        "Developing coding culture in colleges",
        "Collaborating with college clubs to hold hackthons and coding competitions",
        "Organizing coding workshops and webinars",
        
      ],
    },
    {
      title: "Finance Lead",
      company_name: "CETA-IARE",
      icon: ceta,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Overseeing the financial operations of the organization",
        "Managing the budget and financial planning",
        "Preparing financial reports and statements",
      ]
    },
    {
      title: "Head of Public Relations",
      company_name: "E-Cell-IARE",
      icon: ecell,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Managing the public relations of the organization",
        "Overseeing the funtioning of the various PR-Groups of the Cell",
        "Promoting Entrepreneurship and Innovation in the college", 
        "Helping Startups and Entrepreneurs in the college with resources and guidance",
      ],
    },
    {
      title: "Student Ambassador",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Representing Microsoft in the college",
        "Promoting Microsoft products and services",
        "Helping students and faculty with Microsoft products",
        "Organizing workshops and webinars on Microsoft products",
        "Organizing hackathons and coding competitions",
        "Helping the Community to learn and grow",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Vocal",
      description:
        "Vocal is a mp3 player that allows users to play, pause, skip, and loop songs. It was my first project in the field of web development.",
      tags: [
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vocal,
      source_code_link: "https://github.com/anonymousknight07/Project-1-Music-app",
    },
    {
      name: "Edoc-X",
      description:
        "Edoc-X is a chatbot that can be used for various purpose. It can help people to find answers to their queries, and can be their personal assistant.Edoc has it's name from the word 'Code' spelt backwards.",  
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        
      ],
      image: EdocX,
      source_code_link: "https://edoc-x.vercel.app/",
    },
    {
      name: "Edoc-X-Version-2",
      description:
        "It is the second version of Edoc-X. It has improved UI and is more user friendly.It also has an authentication feature and 'New Chat' feature which allows users to start a new chat with the bot. It can also store your previous chats so that one can continue from where they left.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: EdocX2,
      source_code_link: "https://edocxv2.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };