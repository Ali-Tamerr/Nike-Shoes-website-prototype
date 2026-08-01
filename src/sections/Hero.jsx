import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col max-container padding-x pt-28 pb-6 gap-6 min-h-screen"
    >
      {/* Upper Part - Hero Information (Left: Text & Button, Right: Statistics) */}
      <div className="relative flex lg:flex-row flex-col justify-between items-start lg:items-end w-full z-10 gap-6">
        {/* Left Side: Title, Description & CTA */}
        <div className="flex flex-col items-start flex-1 w-full">
          {/* Badge & Full Title Group */}
          <div className="w-fit flex flex-col items-stretch">
            {/* Category Pill Badge */}
            <div className="flex items-center justify-between px-4 py-2 rounded-full border border-coral-red/30 text-coral-red text-sm font-montserrat font-semibold shadow-sm mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs bg-coral-red text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  New
                </span>
                <span>Summer Collection 2026</span>
              </div>
              <ArrowDownRight className="w-6 h-6 text-coral-red ml-3" />
            </div>

            {/* Line 1: The New Arrival */}
            <span className="block font-palanquin text-5xl sm:text-7xl xl:text-[84px] font-extrabold tracking-tight text-slate-900  whitespace-nowrap mb-4">
              The New Arrival <span className="text-coral-red inline-block">Nike</span> Shoes 
            </span>
          </div>

          {/* Lead Description */}
          <p className="font-montserrat text-slate-600 text-base sm:text-lg leading-relaxed w-full  mb-6">
            Discover stylish Nike arrivals, quality comfort, and cutting-edge innovation engineered for your active life.
          </p>

          {/* CTA Button */}
          <div>
            <Link to={'/products'} onClick={handleClick}>
              <Button label="Shop now" iconURL={arrowRight} />
            </Link>
          </div>
        </div>

        {/* Right Side: Statistics Metric Row */}
        <div className="flex gap-8 sm:gap-12 items-center lg:justify-end w-full lg:w-auto pt-6 lg:pt-0 lg:border-l lg:border-slate-200/80 lg:pl-12 pb-2">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-palanquin font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-montserrat text-slate-500 font-medium mt-1 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Part - Interactive Shoe Stage */}
      <div className="relative w-full flex justify-center items-center flex-1 bg-hero bg-cover bg-center rounded-3xl overflow-hidden shadow-inner my-1">
        {/* Main Big Shoe Product Display */}
        <img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="Nike Shoe Collection"
          className="object-contain relative w-[320px] sm:w-[420px] max-w-full z-10"
        />

        {/* Shoe Thumbnails Dock - Positioned on the left side */}
        <div className="flex sm:gap-6 gap-3 absolute bottom-4 left-6 sm:left-12 z-20">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(s) => setBigShoeImg(s)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;