import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I believe in clear communication and shared vision. Good results come from working together.",
      description: "",
      className: "md:col-span-4 md:row-span-2", // %60 alan
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "md:col-span-2 md:row-span-1", // sağ üst
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "md:col-span-2 md:row-span-1", // sağ alt
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "md:col-span-2 md:row-span-1", // sol alt (1)
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "I'm a Frontend Developer focused on user experience, building performant and aesthetic interfaces with React and Next.js.",
      description: "About me",
      className: "md:col-span-4 md:row-span-2", // sağ büyük
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-start  ",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Open to new projects and collaborations.",
      description: "",
      className: "md:col-span-2 md:row-span-1", // sol alt (2)
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "dedapps - Frontend Developer",
      des: "Worked as a Frontend Developer at Dedapps agency, building projects for Web3-focused companies and hackathons.",
      img: "/p1.svg",
      iconLists: ["/re.svg","next.svg", "/tail.svg","bt.svg", "/ts.svg","/js.svg", "fm.svg",],
      link: "https://dedapps.com/",
    },
    {
      id: 2,
      title: "Atlas Software JSC - Web3 Frontend Team Lead",
      des: "Responsible for developing crypto payment dashboards, e-commerce platforms, and various Web3 projects.",
      img: "/p2.svg",
      iconLists: ["re.svg","/next.svg", "/tail.svg", "/ts.svg","js.svg","/dock.svg", "/stream.svg", "/w3.svg","/eth.svg"],
      link: "https://www.atlasyazilim.com.tr/en",
    },
    {
      id: 3,
      title: "Network Academy - Fullstack Developer / Instructor",
      des: "Worked as a Fullstack Developer and later provided training in frontend development.",
      img: "/p3.svg",
      iconLists: ["re.svg","/next.svg","v.svg", "/tail.svg","bt.svg", "/ts.svg","js.svg"],
      link: "https://www.networkakademi.net",
    },
    {
      id: 4,
      title: "Bemol Media Software Studio - Software Developer / Intern",
      des: "Developed Web2 projects including integrations, dashboard interfaces, and corporate websites.",
      img: "/p4.svg",
      iconLists: ["/re.svg", "/bt.svg", "/ts.svg","js.svg"],
      link: "https://www.linkedin.com/company/bemolmedya/?originalSubdomain=tr",
    },

  ];
  
  export const skills = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Ziya Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Ahmet Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Bilgihan Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Rümeysa Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "react",
      img: "/re.svg",
      nameImg: "/reactName.svg",
    },
    {
      id: 2,
      name: "next",
      img: "/next.svg",
      nameImg: "/nextName.svg",
    },
    {
      id: 3,
      name: "tailwind",
      img: "/tail.svg",
      nameImg: "/tailwindName.svg",
    },
    {
      id: 4,
      name: "bootstrap",
      img: "/bt.svg",
      nameImg: "/bootstrapName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
    {
      id: 6,
      name: "typescript",
      img: "/ts.svg",
      nameImg: "/typescriptName.svg",
    },
    {
      id: 7,
      name: "javascript",
      img: "/js.svg",
      nameImg: "/javascriptName.svg",
    },
    {
      id: 8,
      name: "framermotion",
      img: "/fm.svg",
      nameImg: "/framermotionName.svg",
    },
    {
      id: 9,
      name: "vite",
      img: "/vi.svg",
      nameImg: "/viteName.svg",
    },
    {
      id: 10,
      name: "zustand",
      img: "/zus.svg",
      nameImg: "/zustandName.svg",
    },
    {
      id: 11,
      name: "redux",
      img: "/rx.svg",
      nameImg: "/reduxName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Building user-focused web interfaces using modern technologies like React, Next.js, and Vue. I create fast, dynamic, and scalable web experiences.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Developer (React Native)",
      desc: "Developing clean, performant, and user-friendly mobile apps for both iOS and Android using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Computer Engineer / Frontend Engineer",
      desc: "A frontend engineer with a background in computer engineering, combining technical architecture with problem-solving skills.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "UI/UX Enthusiast",
      desc: "A developer who cares deeply about user experience, focusing on clean, intuitive, and visually appealing interfaces.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/bilgihanist",

    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/bilgihanist",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/bilgehan-istanbullu/",
    },
  ];