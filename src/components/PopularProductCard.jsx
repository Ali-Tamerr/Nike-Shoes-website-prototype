import Rating from './Rating';
import { Link } from 'react-router-dom'

const PopularProductCard = ({...products}) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <Link to={`/product/${products.name}`} className="flex flex-1 flex-col items-center max-sm:w-full max-w-[300px] w-full cursor-pointer outline outline-2 outline-offset-[10px] outline-transparent hover:outline-coral-red max-sm:p-3 max-lg:p-0 rounded-lg" onClick={handleClick}>
        <img src={products.imgURL} alt={products.name}
        className="max-w-[280px] w-full"/>
        <Rating rating={products.rate} className="mt-8 w-max justify-start" textStyle="text-[90%] leading-normal cursor-pointer" />
        <h3 className="mt-2 text-2xl text-[100%] leading-normal w-max font-semibold font-palanquin cursor-pointer">{products.name}</h3>
        <p className="mt-2 font-semibold font-montserrat w-max text-2xl leading-normal cursor-pointer text-coral-red text-2lxl">{products.price}</p>
    </Link>
    )
}

export default PopularProductCard