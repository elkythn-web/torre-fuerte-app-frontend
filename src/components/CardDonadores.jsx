import PropTypes from "prop-types";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CardDonadores = ({ donador }) => {
  const { nombre, apellido, cantidad, fecha, comentario, telefono } = donador;

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="flex-auto px-6 py-4 bg-white rounded-lg  ">
      <div className="flex flex-wrap ">
        <h1 className="flex-auto font-medium text-slate-900">
          Nombre: {nombre} {apellido}
        </h1>
        <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-cyan-700">
          Cantidad: {cantidad}
        </div>
      </div>
      <p className="text-sm font-semibold pb-3 ">Fecha: {fecha}</p>
      <div className="flex space-x-4 mb-2 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-full bg-cyan-700 text-white"
            onClick={toggleModal}
            type="button"
          >
            Ver Informacion Completa
          </button>
          <Transition appear show={isOpen} as={Fragment}>
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className=" uppercase text-center text-lg font-bold leading-6 text-gray-900"
                      >
                        Informacion del Donador
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="flex flex-wrap ">
                          <h1 className="flex-auto font-medium text-slate-900">
                            Nombre: {nombre} {apellido}
                          </h1>
                          <h1 className="flex-auto font-medium text-slate-900">
                            Telefono: {telefono}
                          </h1>
                          <div className="w-full flex-none order-1 text-3xl font-bold text-cyan-700">
                            Cantidad: {cantidad}
                          </div>
                        </div>
                        <p className="text-sm font-semibold  ">
                          Comentario: {comentario}
                        </p>
                        <p className="text-sm font-semibold  ">
                          Fecha: {fecha}
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
        </div>
      </div>
    </form>
  );
};

CardDonadores.propTypes = {
  donador: PropTypes.object.isRequired,
};

export default CardDonadores;
