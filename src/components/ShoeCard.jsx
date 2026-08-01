const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const isSelected = bigShoeImg === imgURL.bigShoe;

  const handleClick = () => {
    if (!isSelected) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`relative cursor-pointer rounded-2xl transition-all duration-300 ease-out group overflow-hidden ${
        isSelected
          ? 'border-2 border-coral-red bg-white/90 shadow-xl shadow-coral-red/20 scale-105 ring-4 ring-coral-red/15'
          : 'border border-slate-200/80 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:border-coral-red/50 hover:shadow-lg hover:-translate-y-1'
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-32 sm:h-32 w-24 h-24 rounded-xl p-2 sm:p-3 relative">
        <img
          src={imgURL.thumbnail}
          alt="shoe thumbnail"
          width={120}
          height={90}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
       
      </div>
    </div>
  );
};

export default ShoeCard;