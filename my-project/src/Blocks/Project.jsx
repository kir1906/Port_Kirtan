import { useRef, useState, useEffect } from "react";
import "./Header.css";
import ProjectCard from "./ProjectCard";
import Bg1 from "../assets/Bg1.png";
import Bg2 from "../assets/Bg2.png";
import Bg3 from "../assets/Bg3.png";
// import Bg from "../assets/Bg.jpg";
const UpIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z"
      fill="white"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const DownIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
      fill="white"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default function Project() {
  const projects = [
    {
      skills: ["tensorFlow", "Python", "PyTorch", "NN"],
      backgroundColor: "#F2F2F2",
      description:
        "Developed a recommendation system to rank over micro-influencers for brands. Integrated advanced fairness constraints to ensure equitable visibility among influencers.",
      title: "Ranking Instagram Micro-Influencers for brands fairly",
      image: Bg1,
      link: "https://github.com/kir1906/Fairness_of_Exposure.git",
    },
    {
      skills: ["tensorFlow", "Python", "PyTorch", "Fast API", "NN"],
      backgroundColor: "#E8E8FE",
      description:
        "Conducted EDA, preprocessing, and feature engineering on the World Cup dataset, utilized and fine-tuned regression models for optimal predictive accuracy, and deployed a predictive API using FastAPI.",
      title: "World Cup Data Analysis and Predictive API",
      image: Bg2,
      link: "https://github.com/kir1906/IT496_Phoneix_3.git",
    },
    {
      skills: [
        "React.js",
        "Node.js",
        "JavaScript",
        "Figma",
        "PostgreSQL",
        "PgAdmin",
        "Tailwind CSS",
      ],
      backgroundColor: "#EEF3FE",
      description:
        "Developed an intuitive website integrated with a restaurant automation system, featuring ML-based customer feedback analysis for seamless online ordering and enhanced customer engagement.",
      title: "Restaurant Automation",
      image: Bg1,
      link: "https://github.com/kir1906/Automn.git",
    },
    {
      skills: ["PostgreSQL", "Django"],
      backgroundColor: "#F3FCF7",
      description:
        "Designed a BCNF-compliant database with DDL scripts, created an ER diagram and relational schema, then implemented it on pgAdmin to run real-time queries for database optimization and understanding.",
      title: "Database for e-commerce platform",
      image: Bg3,
      link: "https://github.com/kir1906/DBMS_ecommerce.git",
    },
    {
      skills: ["TensorFlow", "Python", "NN"],
      backgroundColor: "#F1EBE2",
      description:
        "Developed a personalized recommendation system for places using over 13 million Google reviews, incorporating sentiment analysis to enhance recommendations.",
      title: "Recommendation system on Google Reviews",
      image: Bg1,
      link: "https://github.com/kir1906/IT492_Pheonix_1.git",
    },
    {
      skills: [
        "React.js",
        "Node.js",
        "JavaScript",
        "Figma",
        "PostgreSQL",
        "PgAdmin",
        "Tailwind CSS",
      ],
      backgroundColor: "#EEF3FE",
      description:
        "Created a watch-later list application for movies and TV shows, featuring user login and authentication for personalized tracking and secure access.",
      title: "WatchLater List",
      image: Bg2,
      link: "https://github.com/kir1906/WatchLater_List.git",
    },
    {
      skills: ["TensorFlow", "Python", "NN"],
      backgroundColor: "#F1EBE2",
      description:
        "This project involves EDA, preprocessing, and transformation of the Smoking and Drinking dataset, followed by hyperparameter tuning and classification model selection, including Logistic Regression, Decision Tree, KNN, NN, Random Forest, and CatBoost.",
      title: "Smoking and Drinking Dataset Analysis and Classification",
      image: Bg1,
      link: "https://github.com/kir1906/IT496_Phoneix_2.git",
    },
    {
      skills: ["TensorFlow", "Python", "NN", "KNN"],
      backgroundColor: "#E8E8FE",
      description:
        "This project utilizes the MovieLens20 dataset for collaborative filtering-based movie recommendations, leveraging K-nearest neighbors and matrix factorization techniques to enhance user experience through personalized suggestions.",
      title: "MovieLens20 Dataset Analysis and Recommender System",
      image: Bg1,
      link: "https://github.com/kir1906/IT496_Phoneix_2.git",
    },
  ];

  const listRef = useRef(null);
  const [showUpIcon, setShowUpIcon] = useState(false);
  const [showDownIcon, setShowDownIcon] = useState(true);

  const scrollToTop = () => {
    listRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    setShowUpIcon(scrollTop > 0);
    setShowDownIcon(scrollTop + clientHeight < scrollHeight);
  };

  useEffect(() => {
    const currentRef = listRef.current;
    currentRef.addEventListener("scroll", handleScroll);
    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col md:mt-[85px] mt-[55px]">
        <div
          className="hidden lg:flex rounded-xl items-end bg-cover mx-5 mt-7 p-10 lg:h-[83vh] md:h-[20vh] border-[1px] lg:w-[50%] border-[#E5E7EB]"
          // style={{ backgroundImage: `url(${Bg})` }}
        >
          <p className="font-prompt text-3xl w-[60%]">
            Over the past few years, I&apos;ve worked on various projects.
            Here&apos;s few of my best:
          </p>
        </div>
        <div
          className="relative lg:w-[50%] lg:mr-5 lg:m-0 mx-5 md:pt-0 pt-3 overflow-y-scroll flex flex-col lg:h-[89vh] h-[65vh] gap-2"
          ref={listRef}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-[50%] h-full">
              <ProjectCard
                skills={project.skills}
                backgroundColor={project.backgroundColor}
                description={project.description}
                title={project.title}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>
        <div className="flex lg:hidden rounded-xl md:items-end items-center mb-3 mx-5 md:p-10 p-3 lg:h-[83vh] h-[20vh] border-[1px] lg:w-[50%] border-[#E5E7EB]">
          <p className="font-prompt md:text-3xl md:w-[60%] text-xl">
            Over the past few years, I&apos;ve worked on various projects.
            Here&apos;s few of my best:
          </p>
        </div>
        <div className="fixed lg:bottom-16 bottom-[30%] right-2 flex flex-col gap-2">
          {showUpIcon && (
            <button onClick={scrollToTop} className="p-2 bg-black rounded-full">
              <UpIcon />
            </button>
          )}
          {showDownIcon && (
            <button
              onClick={scrollToBottom}
              className="p-2 bg-black rounded-full"
            >
              <DownIcon />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
