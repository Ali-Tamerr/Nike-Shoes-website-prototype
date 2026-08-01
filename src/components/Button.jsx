const Button = ({ label, iconURL, btnCustom, fullWidth, Padding }) => {
  return (
    <button
      className={`group inline-flex justify-center items-center gap-2 border font-montserrat leading-none rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 font-semibold ${
        btnCustom
          ? btnCustom
          : 'text-base sm:text-lg bg-coral-red hover:bg-red-600 border-coral-red text-white shadow-lg shadow-coral-red/25 hover:shadow-xl hover:shadow-coral-red/40 hover:-translate-y-0.5 active:translate-y-0'
      } ${fullWidth ? 'w-full' : ''} ${Padding ? Padding : 'px-7 py-4'}`}
    >
      <span>{label}</span>
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;