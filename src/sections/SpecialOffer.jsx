
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
    return (
        <section className="flex justify-between
        items-center max-xl:flex-col-reverse
        gap-10 max-container">
            <div className="flex-1">
                <img src={offer} alt="Shoe Promotion"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div
        className="flex flex-1
            flex-col"
      >
        <h2
          className="font-palanquin
                text-4xl capitalize
                lg:max-w-lg font-bold"
        >  <span className="text-sky-600
          "> Special </span>
                  Offer</h2>
        <p className="mt-6 lg:max-w-lg
          font-montserrat text-slate-gray text-lg leading-7;
          "
        >
                        Embark on a shopping journey that
                        redefines your experience with shopping
                        with unbeatable deals. From premeier selections
                        to incredible savings, we offer unparalled value
                        that sets us apart.
                    </p>
              <p className="mt-6 lg:max-w-lg
          font-montserrat text-slate-gray text-lg leading-7;
          ">
                    Navigate a realm of possibilities designed
                    to fulfill your unique desires, surpassing the loftiest
                    expectations. Your journey with us is nothing
                    short of exceptional.
                </p>
                <div className="mt-10 flex flex-wrap
              gap-4">
                    <Button label="View details"
                    />
                    <Button 
                        label='Learn more'
                        backgrounsColor='bg-white'
                        borderColor='border-slate-gray'
                    textColor='text-slate-gray'
                    />
              </div>
          </div>
            
       </section>
    )
}
export default SpecialOffer