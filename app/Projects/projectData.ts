import template2 from "@/public/assets/projects/template_2.webp";
import template3 from "@/public/assets/projects/template_3.webp";
import jsTemplate from "@/public/assets/projects/JS_Template.webp";
import BootStrap from "@/public/assets/projects/bootstrap.webp";
import firstPortfolio from "@/public/assets/projects/firstPortfolio.webp";
import githubRepo from "@/public/assets/projects/GithubRepos.webp";
import toDoList from "@/public/assets/projects/TodoList.webp";
import shopsy from "@/public/assets/projects/shopsy.webp";
import ReactPortfolio from "@/public/assets/projects/ReactPortfolio.webp";
import ReBook from "@/public/assets/projects/ReBook.webp";
import shoppingCart from "@/public/assets/projects/ShoppingCart.webp";
import webMasterTask1 from "@/public/assets/projects/task_1.webp";
import viva from "@/public/assets/projects/viva.webp";
import weatherApp from "@/public/assets/projects/weatherApp.webp";
import webMasterECommerce from "@/public/assets/projects/webMasterECommerce.webp";
import { ProjectsTypes } from "@/components/types";
import Tasbee7e from "@/public/assets/projects/tasbee7e.webp";


export const ProjectsData: ProjectsTypes[] = [
  {
    id: 1,
    name: "Template 2",
    image: template2,
    type: ["HTML&CSS"],
    technologies: ["HTML", "CSS"],
    more: [
      "I made this project because i wanted to apply what i learned in HTML and CSS.",
      "I used the Hover in many sections in this project, and used the flex and grid to align the items, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/Template-2",
    website: "https://abdalla-elhagar.github.io/Template-2/",
  },
  {
    id: 2,
    name: "Template 3",
    image: template3,
    type: ["HTML&CSS"],
    technologies: ["HTML", "CSS"],
    more: [
      "I made this project because i wanted to apply what i learned in HTML and CSS.",
      "I used the Hover and animation in many sections in this project.",
      "I learned many things about animation.",
      "I used the flex and grid to align the items, that was an awesome challenge, and i gained some experience about animation, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/Template-3",
    website: "https://abdalla-elhagar.github.io/Template-3/",
  },
  {
    id: 3,
    name: "JS Template",
    image: jsTemplate,
    type: ["JS"],
    technologies: ["HTML", "CSS", "JS"],
    more: [
      "I made this project because i wanted to apply what i learned in Java Script.",
      "I used the DOM to make Events like open the sitting, change the main color of page, chainge the image of Home section, make images to change randomly, change the image of about us section, and add the bullets.",
      "I used the BOM to save all chainges in local storage and reset sittings to default, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/JavaScript-Template",
    website: "https://abdalla-elhagar.github.io/JavaScript-Template/",
  },
  {
    id: 4,
    name: "First Bootstrap Project",
    image: BootStrap,
    type: ["BootStrap"],
    technologies: ["HTML", "BootStrap"],
    more: [
      "I made this project because i wanted to apply what i learned in Bootstrap, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/First-Bootstrap-Project",
    website: "https://abdalla-elhagar.github.io/First-Bootstrap-Project/`",
  },
  {
    id: 6,
    name: "First Portfolio",
    image: firstPortfolio,
    type: ["HTML&CSS"],
    technologies: ["HTML", "CSS"],
    more: [
      "I made this project because i wanted to try to make a portfolio.",
      "I used HTML and CSS, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/First-Portfolio",
    website: "https://abdalla-elhagar.github.io/First-Portfolio/",
  },
  {
    id: 7,
    name: "GitHub Repos",
    image: githubRepo,
    type: ["JS"],
    technologies: ["HTML", "CSS", "JS"],
    more: [
      "I made this project because i wanted to apply what i learned in Java Script.",
      "in this project i used feach APIs to take the data of repos from GitHub.",
      "The user must to but his github username in the input field and all his repos will appear, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/GitHub-Repos",
    website: "https://abdalla-elhagar.github.io/GitHub-Repos/",
  },
  {
    id: 8,
    name: "To Do List",
    image: toDoList,
    type: ["JS"],
    technologies: ["HTML", "CSS", "JS"],
    more: [
      "I made this project because i wanted to apply what i learned in Java Script.",
      "I used the DOM features to add tasks to the padge.",
      "complete the task if i clicked on it.",
      "delete any task if i click on delete button.",
      "I used the BOM features to save the tasks in local storage, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/TO-DO-LIST",
    website: "https://abdalla-elhagar.github.io/TO-DO-LIST/",
  },

  {
    id: 10,
    name: "Shopsy",
    image: shopsy,
    type: ["React", "tailWind"],
    technologies: ["React", "TailWind", "Framer-Motion"],

    more: [
      "I made this project because i wanted to apply what i learned in React and Tailwind.",
      "in this project i added alot of animation using framer-motion.",
      "buted the design using Tailwind.",
      "buted many features using React like dark mode, that was an awesome challenge, and i gained some experience, and i enjoyed",
    ],
    github: "https://github.com/Abdalla-Elhagar/E-Commerce1",
    website: "https://shopsy-topaz.vercel.app/",
  },
  {
    id: 11,
    name: "React Portfolio",
    image: ReactPortfolio,
    type: ["React", "tailWind"],
    technologies: ["React", "TailWind", "Framer-Motion"],
    more: [
      "A personal portfolio website built using React and Tailwind CSS.",
      "Showcases all previous front-end projects in a clean and modern layout.",
      "Used Framer Motion to add smooth animations and interactive transitions.",
      "Includes a contact form that allows users to send messages directly to my email.",
      "Features animated elements and images to enhance visual appeal.",
      "Fully responsive design optimized for all screen sizes.",
      "Built to reflect my skills, creativity, and personal brand as a front-end developer.",
    ],
    github: "https://github.com/Abdalla-Elhagar/React-Portfolio",
    website: "https://react-portfolio-10c07.firebaseapp.com/",
  },
  {
    id: 12,
    name: "ReBook",
    image: ReBook,
    type: ["React", "tailWind", "SASS", "Redux-Toolkit"],
    technologies: [
      "React",
      "TailWind",
      "Framer-Motion",
      "SASS",
      "Swiper",
      "Lazy-Loading",
      "React query"
    ],
    more: [
      "Rebook is a social book exchange platform.",
      "designed for readers who want to share and discover used books.",
      "Browse a wide variety of categories including Programming, Stories, Self-Development, and more.",
      "Users can add their own books, update details, and get in touch with book owners via their contact info.",
      "Built with React and Redux Toolkit.",
      "Rebook features a clean UI, lazy image loading, and stores data locally for a fast, backend-free experience.",
      "Rebook is where your next great read finds you — shared, not sold.",
    ],
    github: "https://github.com/Abdalla-Elhagar/ReBook",
    website: "https://re-book-0.vercel.app/",
  },{
    id: 120,
    name: "ReBook Backend",
    image: ReBook,
    type: ["Backend"],
    technologies: [
      "Node", "Express", "Mongoose", "JWT"
    ],
    more: [
  "The Rebook backend is built with Node.js, Express, and MongoDB using Mongoose for data modeling.",
  "Implements RESTful APIs for user authentication, book management, and profile operations.",
  "Includes secure user registration and login using JWT.",
  "Supports CRUD operations for books — users can add, edit, delete, and fetch their own books.",
  "Integrates CORS and dotenv for secure environment configuration and cross-origin access.",
  "Password hashing is handled with bcrypt to enhance security and protect user credentials.",
  "Error handling middleware ensures stable and predictable API responses.",
  "Deployed on Vercel with a connected MongoDB Atlas cloud database for persistence.",
],
    github: "https://github.com/Abdalla-Elhagar/rebook–backend",
  },
  {
    id: 13,
    name: "Shopping cart",
    image: shoppingCart,
    type: ["JS", "tailWind"],
    technologies: ["JS", "TailWind"],
    more: [
      "A front-end project called Shopping Cart, developed during the Webmasters training.",
      "Built using HTML, Tailwind CSS, and JavaScript.",
      "Fetched product data using fetch() from an external API.",
      "Created Register and Login pages with local user authentication.",
      "Stored user and product data in Local Storage.",
      "Built a shopping cart system with item management.",
      "Designed to be responsive for various screen sizes using Tailwind.",
    ],
    github: "https://github.com/Abdalla-Elhagar/Web-Masters-ShoppingCart",
    website: "https://abdalla-elhagar.github.io/Web-Masters-ShoppingCart/",
  },
  {
    id: 14,
    name: "Web Masters Task1",
    image: webMasterTask1,
    type: ["HTML&CSS"],
    technologies: ["HTML", "CSS"],
    more: [
      "A front-end project built using only HTML and CSS.",
      "This was the first task during the Webmasters training.",
      "Focused on creating a full UI layout without JavaScript.",
      "Used CSS Flexbox and Grid for layout structuring.",
      "Applied modern CSS design techniques including colors, spacing, alignment, and typography.",
      "Designed to be responsive across different screen sizes.",
    ],
    github: "https://github.com/Abdalla-Elhagar/task1-Web-Masters",
    website: "https://abdalla-elhagar.github.io/task1-Web-Masters/",
  },
  {
    id: 15,
    name: "Viva Decor",
    image: viva,
    type: ["tailWind"],
    technologies: ["HTML", "TailWind"],

    more: [
      "A front-end project named VivaDecor, developed as part of the Webmasters training tasks.",
      "Built using HTML and styled entirely with the Tailwind CSS framework.",
      "Practiced using Flexbox and Grid system for modern layout structures.",
      "Implemented hover effects to enhance user interaction.",
      "Applied responsive design techniques for compatibility with mobile and desktop screens.",
      "Focused on mastering the utility-first approach provided by Tailwind.",
    ],
    github: "https://github.com/Abdalla-Elhagar/Web-Masters-VivaDecor",
    website: "https://abdalla-elhagar.github.io/Web-Masters-VivaDecor/",
  },
  {
    id: 16,
    name: "weather App",
    image: weatherApp,
    type: ["React", "tailWind"],
    technologies: ["React", "TailWind"],

    more: [
      "A weather application developed as part of the Webmasters training tasks.",
      "Built using React and Tailwind CSS.",
      "Fetched real-time weather data using the OpenWeatherAPI.",
      "Displayed weather details such as temperature, humidity, and weather conditions based on user input.",
      "Used React components and state management to handle API responses and update the UI dynamically.",
      "Styled using Tailwind CSS for a clean and responsive design.",
      "Demonstrates integration of third-party APIs in a front-end project.",
    ],
    github: "https://github.com/Abdalla-Elhagar/webMasters-WeatherApp",
    website: "https://weather-app-90808.web.app/",
  },
  {
    id: 17,
    name: "webMasters E-commerce",
    image: webMasterECommerce,
    type: ["React", "tailWind"],
    technologies: [
      "React",
      "TailWind",
      "Framer-Motion",
      "Swiper",
      "Redux-Toolkit",
    ],

    more: [
      "A complete front-end e-Commerce application developed as the final task in the Webmasters training program.",
      "Built using React, Redux Toolkit, and Tailwind CSS.",
      "Used Swiper.js to implement product sliders and carousels.",
      "Implemented user authentication with Register and Login pages.",
      "Users must log in to add products to their cart or favorites.",
      "Enabled adding and removing products to/from the shopping cart and favorites list.",
      "Stored user and product data using Local Storage for persistence.",
      "Created a user profile page where users can view and update their personal information.",
      "Used Framer Motion to add animations and transitions across pages.",
      "Included categorized products (e.g., TV, Gaming, etc.) for better browsing experience.",
      "Demonstrates real-world e-commerce UI logic including state management, interactivity, and responsive design.",
    ],
    github: "https://github.com/Abdalla-Elhagar/webMasters-E-commerce",
    website: "https://abdalla-elhagar.github.io/webMasters-E-commerce/",
  },
  {
    id: 17,
    name: "Tasbee7e",
    image: Tasbee7e,
    type: ["React", "tailWind"],
    technologies: ["React", "TailWind", "Context API"],

    more: [
      "A Tasbee7e application that allows users to add, view, and count azkar (remembrances).",
      "Built with a clean and simple interface using React and TypeScript.",
      "Styled with Tailwind CSS to provide a modern and responsive design.",
      "Implemented React Router for smooth navigation between pages (Home, Add Zikr, Zikr Details).",
      "Displays a welcome message on the home screen with a note that no azkar added yet.",
      "Users can add new azkar with a name and description through an input form.",
      "Each added zikr appears as a card with details.",
      "Clicking on a zikr card opens a detailed page showing its name, description, and counter.",
      "Includes a counter button to increase the zikr count and a reset button to return it back.",
      "Data for azkar, descriptions, and counter values are persisted using Local Storage.",
      "Demonstrates state management, interactivity, and real-world UI logic with React, TypeScript, Tailwind CSS, and React Router.",
    ],
    github: "https://github.com/Abdalla-Elhagar/tasbee7e",
    website: "https://tasbee7.vercel.app",
  },
];
