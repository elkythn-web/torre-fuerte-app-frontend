import { useState } from "react";
import Error from "./Error";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      nombre.trim() === "" ||
      comentario.trim() === ""
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }
    console.log("Enviando...");
    setEmail("");
    setNombre("");
    setComentario("");
  };
  return (
    <div className=" bg-cyan-900 p-4 sm:p-8 ">
      <form
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold mb-6">Contactanos</h1>
        {error ? <Error>Por favor, rellena todos los campos</Error> : null}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Correo electronico
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nombre Completo
          </label>
          <input
            type="nombre"
            id="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="comentario"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Comentario
          </label>
          <textarea
            id="comentario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Escribe tu comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-cyan-700 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-cyan-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Enviar Correo
        </button>
      </form>
    </div>
  );
};

export default Contact;
