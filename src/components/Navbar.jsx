const Navbar = () => {
  return (
    <div className=" bg-cyan-900 w-full ">
      <nav className=" px-8 py-4 flex flex-col items-center ">
        <a href="/" className=" text-white text-xl font-bold uppercase cursor-pointer hover:border-b-2 border-b-2 border-cyan-900 hover:border-amber-500 transition-colors ">
          <p>
            Ministerio de {" "}
            <span className=" font-black text-amber-500 text-3xl ">
              Restauracion <span className=" font-bold text-white text-xl ">Torre Fuerte</span>
            </span>
          </p>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
