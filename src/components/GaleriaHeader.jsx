import { Carousel } from "@material-tailwind/react";

const GaleriaHeader = () => {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <img
        src="../galeria-1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="../galeria-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="../galeria-3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="../galeria-4.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default GaleriaHeader;
