// PROJECTS
import blog from "../../assets/images/projects/blog.webp";
import server from "../../assets/images/projects/web_server.png";
import movie from "../../assets/images/projects/movieflix.png";
import crypto from "../../assets/images/projects/Crypto.png";
import portfolio from "../../assets/images/projects/portfolio.png";


const ProjectDetails = [
  {
    image: blog,
    title: "Blogify",
    text: "A simple CRUD blog Application made in REACT and GO",
    site: null,
    code: `https://github.com/priyanshu-gupta07/Blogify`,
  },
  {
    image: server,
    title: "WEB_SERVER C++",
    text: "A http web server from scratch without using any third party library",
    site: "https://priyanshu-gupta07.github.io/Web_Server/",
    code: "https://github.com/priyanshu-gupta07/Web_Server",
  },
  {
    image: movie,
    title: "Movieflix",
    text: "A Great Ui Application for movie Browsing and a robust Backend in Go along postgres",
    site: null,
    code: "https://github.com/ErysCode7/hulu-v2",
  },
  {
    image: crypto,
    title: "Crypto Bazar",
    text: "A crpto learning and visualization Platform in MERN stack",
    site: "https://crypto-bazar-55e3.vercel.app/",
    code: "https://github.com/priyanshu-gupta07/Crypto-Bazar",
  },
  {
    image: portfolio,
    title: "Portfolio",
    text: "A personalised portfolio made with react",
    site: null,
    code: "https://github.com/priyanshu-gupta07/Portfolio",
  },
];

export default ProjectDetails;