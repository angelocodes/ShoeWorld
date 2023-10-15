import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between
        items-center max-lg:flex-col gap-10
        w-full max-container"
    >
      <div
        className="flex flex-1
            flex-col"
      >
        <h2
          className="font-palanquin
                text-4xl capitalize
                lg:max-w-lg font-bold"
        >We Provide You
                  <span className="text-sky-600
          "> Super </span>
                  <span className="text-sky-600
          ">Quality</span> Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg
          font-montserrat text-slate-gray text-lg leading-7;
          "
        >
                  Ensuring premium comfort and
                  styles, our meticulously crafted
                  footwear is designed to elevate your experience,]
                  providing you with unmatched quality,
                  innovation, and a touch of elegance.
              </p>
              <p className="mt-6 lg:max-w-lg
          font-montserrat text-slate-gray text-lg leading-7;
          ">
                  Our dedication to detail and 
                  excellence ensures your satisfaction
              </p>
              <div className="mt-10 ">
              <Button label="View details" />
              </div>
          </div>
          <div className="flex flex-1 justify-center
          items-center">
              <img src={shoe8} alt="shoe8"
                  height={522}
                  width={570}
                  className="object-contain"
              />
          </div> 
    </section>
  );
};
export default SuperQuality;
