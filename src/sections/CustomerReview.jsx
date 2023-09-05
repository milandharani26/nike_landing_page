import ReviewCard from '../componants/ReviewCard'
import {reviews} from '../constants'

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        what Our
        <span className="text-coral-red"> Customer </span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear geniune stories from our satisfied customers about their exceprional eceprience eith us.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:fle gap-14">
        {reviews.map((review)=>(
            <ReviewCard
              key={review.customerName}
                imgURL={review.imgURL}
                customerName={review.
                customerName}
                rating={review. rating}
                feedback={review.feedback}
            />
        ))}

      </div>

    </section>
  )
}

export default CustomerReview
