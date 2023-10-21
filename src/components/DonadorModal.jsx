import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

const DonadorModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [donadores, setDonadores] = useState([]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const obtenerDonadores = async () => {
      try {
        const url = `${import.meta.env.VITE_URL_BACKEND}/donadores`;
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
    <>
      <div>
        <button
          type="button"
          onClick={toggleModal}
          className="bg-amber-400 hover:bg-amber-600 text-white uppercase mx font-bold py-2 px-4 rounded-full mb-6"
        >
          Ver lista completa de donadores
        </button>
      </div>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <p className=" uppercase font-bold text-center text-sm sm:text-2xl ">
                      Lista de donadores
                    </p>
                  </Dialog.Title>
                  <div className=" mt-2 relative overflow-x-auto overflow-y-auto max-h-[20rem] ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Nombre
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Telefono
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Cantidad
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Fecha
                          </th>
                        </tr>
                      </thead>
                      {donadores.map((donador, id) => (
                        <tbody key={id}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {donador.nombre} {donador.apellido}
                            </th>
                            <td className="px-6 py-4">{donador.telefono}</td>
                            <td className="px-6 py-4">{donador.cantidad}</td>
                            <td className="px-6 py-4">{donador.fecha}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-800 focus-visible:ring-offset-2"
                      onClick={toggleModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DonadorModal;
