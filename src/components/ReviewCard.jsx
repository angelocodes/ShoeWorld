import { star } from "../assets/icons"

const ReviewCard = ({ feedback, customerName, rating, imgURL}) => {
  return (
      <div className="flex justify-center
    items-center flex-col">
          <img src={imgURL}
              alt="customer"
              className="rounded-full
          object-cover w-[120px] h-[120px]"/>
          <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
          <div className="mt-3 gap-2.5 flex justify-center items-center">
              <img src={star}
                  height={24}
                  width={24} 
                  alt="rating star" 
                  className="object-contain m-0" />
              <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
          </div>
          <h3 className="mt-1 font-palanquin text-center text-3xl font-bold">{ customerName }</h3>
       
    </div>
  )
}

export default ReviewCard