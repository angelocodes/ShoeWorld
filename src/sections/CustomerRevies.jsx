import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className=" text-center 
            font-bold  font-palanquin text-4xl">
                What Our
                <span className="text-sky-600 "> Customers </span>
                Say?</h3>
            <p className="info-text
            m-auto text-center max-w-lg">
                Hear genuine stories  from our satidfied Customers about their
                exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1
            justify-evenly items-center
            max-lg:flex-col gap-14">
                {reviews.map((review) => (
                        <ReviewCard 
                            key={review.customerName}
                            imgURL={review.imgURL}
                            customerName={review.customerName}
                            CustomerReviews={review.CustomerReviews}
                            rating={review.rating}
                            feedback={review.feedback}
                        />
                         ))}
            </div>
        </section>
    )
}
export default CustomerReviews