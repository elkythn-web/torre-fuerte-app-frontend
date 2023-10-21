import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className=" bg-white w-full px-4 sm:px-8 h-50 p-8 text-cyan-900 ">
        <h1 className=" text-center font-light text-xl ">Ministerio de Restauracion Torre Fuerte</h1>
        <div className=" flex flex-col items-center p-4 ">
            <div className=" flex gap-4 ">
            <a href="/"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>
            <a href="/"><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
            </div>
        </div>
        <hr />
        <p className=" text-center text-sm py-2 ">Todos los derechos reservados - 2023 &copy;</p>
    </div>
  )
}

export default Footer