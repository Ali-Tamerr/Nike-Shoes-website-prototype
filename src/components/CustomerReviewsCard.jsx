import Rating from "./Rating";

const CustomerReviewsCard = ({...reviews}) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-[600px] gap-4 text-center border border-black px-8 py-10 rounded-[40px] max-h-[420px]">
        <img src={reviews.imgURL} alt={reviews.customerName} className="w-[120px] h-[120px] rounded-full mb-4 border border-black"/>
        <p className="font-montserrat text-slate-gray w-[70%] text-lg leading-7 max-lg:text-base max-lg:w-[90%]">{reviews.feedback}</p>
        <Rating rating={reviews.rating} textStyle="text-xl" showParentheses={true} />
        <h3 className="font-extrabold font-palanquin text-[35px] max-lg:text-2xl -mt-2">{reviews.customerName}</h3>
    </div>
  )
}

export default CustomerReviewsCard