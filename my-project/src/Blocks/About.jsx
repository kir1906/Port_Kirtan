/* eslint-disable no-unused-vars */
import React from "react";
import ki from "../assets/ki.png";
import "./Header.css";
import Noise from "../assets/Noise.png";
import { Button } from "@/components/ui/button";
import { FaHandPointRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="flex md:flex-row flex-col rounded-xl items-center mx-5 md:mt-[115px] mt-[85px] p-5 border-[1px] border-[#E5E7EB]">
        <img src={ki} className="md:w-[200px] rounded-xl" />
        <div className="md:ml-[5%] md:p-2 pt-[15%] md:pt-0">
          <p className="text-2xl font-prompt ">About Me</p>
          <p className="lg:w-[90%] text-[#828892] mt-2">
            I am passionate individual who enjoys exploring new opportunities
            and learning new skills. In your free time, you love engaging in
            creative activities such as drawing, writing, or playing musical
            instruments. In your free time, you love engaging in creative
            activities such as drawing, writing, or playing musical instruments.
            In your free time, you love engaging in creative activities such as
            drawing, writing, or playing musical instruments.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col lg:mb-5">
        <div className="lg:h-[51vh] md:h-[40vh] h-[60vh] w-full lg:w-[50%] mb-5 md:mb-0 md:w-[60%]">
          <div className="flex flex-col rounded-xl h-full mx-5 mt-5 md:p-7 p-4 border-[1px] border-[#E5E7EB]">
            <p className="font-prompt text-2xl">My Projects</p>
            <div className="w-[100%] h-[100%] mt-5 relative ">
              <div className="md:w-[90%] md:h-[85%] w-[96%] h-[95%] md:left-5 md:top-5 left-2 top-2 absolute bg-stone-950 opacity-20 rounded-3xl" />
              <div className="md:w-[90%] md:h-[85%] w-[96%] h-[95%] md:left-10 md:top-10 left-4 top-4 absolute bg-stone-950 opacity-10 rounded-3xl" />
              <div
                className="md:w-[90%] md:h-[85%] w-[96%] h-[95%] left-0 top-0 absolute bg-stone-950 rounded-3xl p-7 flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${Noise})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div>
                  <div className="flex">
                    <div className=" text-[#FFFF] border-[1px] px-2 py-[2px] rounded-lg ">
                      Python
                    </div>
                  </div>
                  <div className="text-2xl text-neutral-50 mt-5">
                    Project Name
                  </div>
                  <div className="md:text-lg text-base  text-[#a5aab0] mt-1">
                    Description of the project in 2 to 3 lines I am passionate
                    individual who enjoys exploring new opportunities and
                    learning new skills.
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link to="/project">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <MdArrowOutward />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-[50%] md:w-[40%]">
          <div className="lg:h-[33vh] md:h-[40vh] w-[100%] md:my-5">
            <div className="flex flex-col rounded-xl h-full p-7 md:mr-5 md:m-0 m-5 border-[1px] border-[#E5E7EB]">
              <p className="font-prompt text-2xl">Skills</p>
              <div className="flex flex-wrap gap-4 mt-4 lg:w-[90%]">
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  React.js
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  Node.js
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  Python
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  PyTorch
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  C++
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  C
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  JavaScript
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  Figma
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  PostgreSQL
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  Django
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  OOPs
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  DSA
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  CNNs
                </Button>
                <Button
                  variant="secondary"
                  className=" text-[#a5aab0] font-normal"
                >
                  DNNs
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[15.5vh] w-[100%] lg:block hidden ">
            <div className="flex justify-around items-center rounded-xl mr-5 h-full p-5 border-[1px] border-[#E5E7EB]">
              <p className="font-prompt text-2xl">Resume</p>
              <div className="w-[70%] bg-black h-[90%] rounded-xl flex justify-around items-center">
                <p className=" text-white ">For More Details About My career</p>
                <Link to="/resume">
                  <Button variant="outline">Open</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[15vh] h-[10vh] w-[100%] block lg:hidden mb-5">
        <div className="flex justify-around items-center rounded-xl mx-5 h-full p-5 border-[1px] border-[#E5E7EB]">
          <p className="font-prompt text-2xl">Resume</p>
          <div className="md:w-[70%] w-fit bg-black md:h-[90%] h-fit rounded-xl flex justify-around items-center">
            <p className="hidden md:block text-white ">
              For More Details About My career
            </p>
            <Link to="/resume">
              <Button
                variant="outline"
                className="shadow-none md:bg-white bg-black text-white md:text-black"
              >
                Open
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
