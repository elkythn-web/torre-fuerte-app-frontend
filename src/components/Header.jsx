import GaleriaHeader from "./GaleriaHeader";

const Header = () => {
  return (
    <section className="bg-white text-black ">
      <div className="grid px-4 py-8 mx-2 sm:mx-12 lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-4xl bg-gradient-to-r from-amber-500 to-cyan-600 bg-clip-text text-transparent mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-center sm:text-start ">
            Ministerio de Restauracion Torre Fuerte
          </h1>
          <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
          Estamos emocionados por un importante proyecto de construcción en nuestra iglesia, que nos permitirá 
          mejorar nuestro lugar de adoración y expandir nuestras instalaciones para servir mejor a la comunidad. 
          En Lucas 6:48, se nos recuerda la importancia de construir sobre una base sólida, y estamos seguros de que este proyecto fortalecerá 
          nuestro ministerio. Para lograrlo, necesitamos su apoyo económico. Cada donación nos acercará más a alcanzar este objetivo. 
          Su generosidad es esencial, y creemos que Dios proveerá.
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
