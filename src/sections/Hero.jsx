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
      className="w-full flex flex-col max-container padding-x pt-24 sm:pt-28 max-xl:pt-20 pb-4 gap-4 sm:gap-6 xl:min-h-screen"
    >
      {/* Upper Part - Hero Information */}
      <div className="flex flex-col w-full z-10 gap-4">
        {/* Row 1: Badge & Header */}
        <div className="flex flex-col items-start w-fit">
          {/* Category Pill Badge */}
          <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-coral-red/30 text-coral-red text-sm font-montserrat font-semibold shadow-sm w-full mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs bg-coral-red text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                New
              </span>
              <span>Summer Collection 2026</span>
            </div>
            <ArrowDownRight className="w-6 h-6 text-coral-red ml-3" />
          </div>

          {/* Heading */}
          <h1 className="font-palanquin text-5xl sm:text-7xl xl:text-[84px] font-extrabold tracking-tight text-slate-900">
            The New Arrival <span className="text-coral-red inline-block">Nike</span> Shoes 
          </h1>
        </div>

        {/* Row 2: Lead Description */}
        <p className="font-montserrat text-slate-600 text-base sm:text-lg leading-relaxed w-full">
          Discover stylish Nike arrivals, quality comfort, and cutting-edge innovation engineered for your active life.
        </p>

        {/* Row 3: Shop Now Button & Statistics in One Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-6 pt-2">
          {/* CTA Button */}
          <div>
            <Link to={'/products'} onClick={handleClick}>
              <Button label="Shop now" iconURL={arrowRight} />
            </Link>
          </div>

          {/* Statistics Metrics */}
          <div className="flex gap-8 sm:gap-12 items-center">
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
      </div>

      {/* Lower Part - Interactive Shoe Stage */}
      <div className="relative w-full flex justify-center items-center flex-1 min-h-[220px] sm:min-h-[280px] max-h-[420px] py-6 bg-hero bg-cover bg-center rounded-3xl overflow-hidden shadow-inner my-1">
        {/* Main Big Shoe Product Display */}
        <img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="Nike Shoe Collection"
          className="object-contain relative w-[240px] sm:w-[340px] xl:w-[420px] max-h-[70%] max-w-full z-10"
        />

        {/* Shoe Thumbnails Dock - Positioned on the left side */}
        <div className="flex sm:gap-6 gap-3 absolute bottom-3 sm:bottom-4 left-4 sm:left-12 z-20">
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