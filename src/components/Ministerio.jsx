const Ministerio = () => {
  return (
    <div className=" bg-white p-4 sm:p-8 ">
      <h1 className=" uppercase font-bold text-lg text-center sm:text-xl p-4 pb-6 ">Galeria</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="../imagen-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="../imagen-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="../imagen-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Ministerio;
