import { star } from '../assets/icons' 

const PopularProductCard = ({ imgURL, name,
    price }) => {
  return (
      <div className="flex flex-1
    flex-col w-full max-sm:w-full">
          <img src={imgURL} alt={name}
              className="w-[280px] h-[280px]"
          />
          <div className="mt-8 flex justify-start
          gap-2.5">
              <img src={star} alt="rating"
                  width={24}
                  height={24} />
              <p className='font-montserraat text-xl
              leading-normal text-slate-gray'>(4.5)</p>
          </div>
          <h3 className='mt-2 text-2xl
          font-palanquin font-semibold
          leading-norma'>{name}</h3>
          <p className='mt-2 font-semibold
          text-2xl leading-normal text-sky-600
          font-montserrat'>{price}</p>
      </div>
  )
}

export default PopularProductCard;