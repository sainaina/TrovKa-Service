import { Carousel } from "flowbite-react";

const SlideService = () => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel pauseOnHover>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"./src/assets/image/home-service-slide.jpg"} alt="Home Services" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-Secondary">Home Service</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"./src/assets/image/auto-service-slide.jpg"} alt="auto service" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Auto Service</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"./src/assets/image/restaurant-slide.jpg"} alt="restaurant" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Restaurant</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"./src/assets/image/education-slide.jpg"} alt="education" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Education</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover " src={"./src/assets/image/electronic-slide.png"} alt="electronic" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Electronic</p>
        </div>
      </Carousel>
    </div>
  );
};

export default SlideService;
