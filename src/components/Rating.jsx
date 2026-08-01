import { star } from "../assets/icons";

const Rating = ({
  rating,
  className = "",
  starSize = 24,
  textStyle = "",
  showParentheses = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={star}
        alt="rating star"
        width={starSize}
        height={starSize}
        className="object-contain"
      />
      <p className={`font-montserrat text-slate-gray ${textStyle}`}>
        {showParentheses ? `(${rating})` : rating}
      </p>
    </div>
  );
};

export default Rating;
