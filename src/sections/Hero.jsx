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
      className="w-full flex xl:flex-row flex-col justify-between min-h-screen max-container gap-10 xl:gap-0 padding-x xl:padding-l relative overflow-hidden py-8 xl:py-0"
    >
      {/* Left Column - Hero Information */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-16 xl:pt-28 z-10">
        
        <div className="w-fit flex flex-col items-stretch">
          {/* Category Pill Badge */}
          <div className="flex items-center justify-between px-4 py-2 rounded-full border border-coral-red/30 text-coral-red text-sm font-montserrat font-semibold shadow-sm mb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs bg-coral-red text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                New
              </span>
              <span>Summer Collection 2026</span>
            </div>
            <ArrowDownRight className="w-6 h-6 text-coral-red" />
          </div>

          {/* Hero Title */}
          <h1 className="font-palanquin text-5xl sm:text-7xl xl:text-[84px] font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
            <span className="block">The New Arrival</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red via-indigo-300 to-coral-red inline-block mt-2">
              Nike
            </span>{" "}
            <span>Shoes</span>
          </h1>
        </div>

        {/* Lead Description */}
        <p className="font-montserrat text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
          Discover stylish Nike arrivals, quality comfort, and cutting-edge innovation engineered for your active life.
        </p>

        {/* CTA Button Group */}
        <div className="flex sm:flex-row flex-col items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
          <Link to={'/products'} onClick={handleClick}>
            <Button label="Shop now" iconURL={arrowRight} />
          </Link>
          
          <Link
            to={'/products'}
            onClick={handleClick}
            className="flex justify-center items-center gap-2 px-7 py-4 rounded-full font-montserrat text-base sm:text-lg font-semibold text-slate-800 bg-white/80 hover:bg-slate-900 hover:text-white border border-slate-300/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Explore Collection</span>
          </Link>
        </div>

        {/* Statistics Metric Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full pt-8 border-t border-slate-200/80">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-palanquin font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-montserrat text-slate-500 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Interactive Shoe Stage */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen py-16 xl:py-0 bg-hero bg-cover bg-center rounded-3xl xl:rounded-none overflow-hidden my-6 xl:my-0 shadow-inner">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-coral-red/15 rounded-full blur-[100px] pointer-events-none -z-0" />

        {/* Floating Top Rating Card */}
        <div className="absolute top-6 left-6 sm:left-10 z-10 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl px-4 py-3 rounded-2xl flex items-center gap-3 animate-bounce-slow">
          <div className="w-10 h-10 rounded-xl bg-coral-red/10 flex items-center justify-center text-coral-red font-bold text-sm">
            ★ 4.9
          </div>
          <div>
            <p className="text-[11px] text-slate-500 font-montserrat font-semibold uppercase tracking-wider">Top Rated</p>
            <p className="text-sm font-bold text-slate-900 font-palanquin">Air Max Series</p>
          </div>
        </div>

        {/* Floating Stock Badge */}
        <div className="hidden sm:flex absolute top-10 right-8 z-10 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl px-4 py-2.5 rounded-2xl items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-800 font-montserrat">In Stock & Ready to Ship</span>
        </div>

        {/* Main Big Shoe Product Display */}
        <img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="Nike Shoe Collection"
          className="object-contain relative w-[480px] sm:w-[560px] max-wide:w-[85%] z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-500 ease-out transform"
        />

        {/* Shoe Thumbnails Dock */}
        <div className="flex sm:gap-6 gap-3 absolute bottom-4 sm:bottom-10 z-20 max-sm:px-3 bg-white/40 backdrop-blur-xl p-3 rounded-3xl border border-white/60 shadow-2xl">
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