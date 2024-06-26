import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";

type HeroType = { title: string; subTitle: string };

const Hero = ({ title, subTitle }: HeroType) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-around items-center h-5/6">
          <div className="px-12">
            <h1 className="text-4xl">{title}</h1>
            <p className="mt-5">{subTitle}</p>
            <Link
              to="/about"
              className="my-5 bg-blue-500 text-white rounded px-5 py-2 flex items-center w-max"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="p-10">
            <img
              src={heroImage}
              alt=""
              style={{ height: "70vh", maxWidth: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
