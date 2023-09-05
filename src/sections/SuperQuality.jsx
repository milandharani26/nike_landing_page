import Button from '../componants/Button'
import {shoe8} from '../assets/images'
import { arrowRight } from '../assets/icons'


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

        <div className="flex flex-1 flex-col">
          
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you <span
            className="text-coral-red"
          >super</span> 
           <span
            className="text-coral-red"
          > quality</span> shoes 
         
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your exceprience, providing you with unmatched quality, innovation, and touch of elegance. 
        </p>

        <p className="mt-6 lg:max-w-lg info-text">our dedication to detail and excellence ensure your satisfaction</p>

        <div className="mt-11">
        <Button label="shop now"
            iconURL={arrowRight}/>

        </div> 
       </div>

       <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8"
          width={570}
          height={522}
          className='object-contain' 
          />
          
       </div>

    </section>
  )
}

export default SuperQuality
