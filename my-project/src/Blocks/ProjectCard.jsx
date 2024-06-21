import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import "./Header.css";
import Bg1 from "../assets/Bg1.png";
import Bg2 from "../assets/Bg2.png";
import Bg3 from "../assets/Bg3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [Bg1, Bg2, Bg3];

export default function ProjectCard({
  skills,
  backgroundColor,
  image,
  description,
  title,
}) {
  const randomImage =
    image || images[Math.floor(Math.random() * images.length)];

  return (
    <div
      className={`flex flex-col gap-5 mt-[4%] rounded-xl md:p-10 p-5 h-[93%] mb-5`}
      style={{ backgroundColor }}
    >
      <div className="md:flex hidden flex-wrap gap-3 md:w-[95%] w-full h-fit ">
        {skills.map((skill, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="shadow-none md:text-sm text-xs"
            style={{ backgroundColor }}
          >
            {skill}
          </Button>
        ))}
      </div>
      <div>
        <p className="font-prompt text-3xl">{title}</p>
      </div>
      <img src={randomImage} className="rounded-xl h-[45%]" />
      <div>
        <p className="text-[#5a5e65]">{description}</p>
      </div>
      <Button className="md:w-[25%] w-[50%] gap-x-2 md:h-[8%] h-[10%] rounded-xl">
        <p>View Project</p>
        <FaArrowRightLong />
      </Button>
    </div>
  );
}

ProjectCard.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  backgroundColor: "#F2F2F2",
  image: null,
};
