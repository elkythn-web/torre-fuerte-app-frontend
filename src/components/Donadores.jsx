import CardDonadores from "./CardDonadores";
import DonadorModal from "./DonadorModal";
import { useEffect, useState } from "react";

const Donadores = () => {
  const [donadores, setDonadores] = useState([]);

  useEffect(() => {
    const obtenerDonadores = async () => {
      try {
        const url = `${import.meta.env.VITE_URL_BACKEND}/donadores/ultimos`;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setDonadores(data);
      } catch (error) {
        console.error("Error al obtener los donadores:", error);
      }
    };
    obtenerDonadores();
  }, []);

  return (
    <div className="bg-cyan-900">
      <h1 className=" uppercase text-center pt-4 font-bold text-white text-lg ">
        Donadores recientes
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center font-sans p-4 sm:px-16 ">
        {donadores.map((donador, id) => (
          <CardDonadores key={id} donador={donador} />
        ))}
      </div>
      <div className=" px-4 sm:px-16 ">
        <DonadorModal />
      </div>
    </div>
  );
};

export default Donadores;
