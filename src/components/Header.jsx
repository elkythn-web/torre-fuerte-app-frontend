import GaleriaHeader from "./GaleriaHeader";

const Header = () => {
  return (
    <section className="bg-white text-black ">
      <div className="grid px-4 py-8 mx-2 sm:mx-12 lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl bg-gradient-to-r from-amber-500 to-cyan-600 bg-clip-text text-transparent mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-center sm:text-start ">
            Ministerio de Restauracion Torre Fuerte
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            El Ministerio es un lugar de refugio, sanación y restauración.
            Nuestro compromiso es ser un faro de esperanza y un apoyo sólido
            para aquellos que se enfrentan a momentos de turbulencia en la vida.
          </p>
        </div>
        <div className="sm:mt-0 sm:col-span-5 sm:flex">
          <GaleriaHeader />
        </div>
      </div>
    </section>
  );
};

export default Header;
