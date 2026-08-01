import { ArrowRight } from "lucide-react";

const Button = ({ label, iconURL, btnCustom, fullWidth, Padding }) => {
  return (
    <button
      className={`group inline-flex justify-center items-center gap-2 border font-montserrat leading-none rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 font-semibold ${
        btnCustom
          ? btnCustom
          : 'text-base sm:text-lg bg-coral-red hover:bg-blue-400 border-coral-red text-white shadow-lg shadow-coral-red/25 hover:shadow-xl hover:shadow-coral-red/40 hover:-translate-y-0.5 active:translate-y-0'
      } ${fullWidth ? 'w-full' : ''} ${Padding ? Padding : 'px-7 py-4'}`}
    >
      <span>{label}</span>
      {iconURL && (
        <span className="ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-coral-red shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </span>
      )}
    </button>
  );
};

export default Button;