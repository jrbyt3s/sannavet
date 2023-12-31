import React from "react";
import Map from '../components/Map';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
const Ubicanos = () => {
    const address = 'Av. 13 de Enero, N° 2201-2213, San Juan de Lurigancho 15434, Perú';
    return (

        <section className="my-24 mx-16">
            <div className="my-16 text-base font-semibold text-[#082E52]" >
                <h4><FaClock className="inline text-orange-500" /> Horarios</h4>
                <p className="ml-5">Lunes a viernes: 9:00 am a 5:00 pm <br />Sábado: 10:00 am a 3:00 pm <br />Domingo: Cerrado</p>
                <h4><FaPhoneAlt className="inline text-orange-500" /> Nuestro número telefónico es: 966 842 258</h4>
                <h4><FaMapMarkerAlt className="inline text-orange-500" /> Direccion:</h4>
                <p className="ml-5">Av. 13 de Enero, N° 2201-2213, San Juan de Lurigancho 15434, Perú</p>
            </div>

            <Map address={address} />
        </section>

    );
}

export default Ubicanos;
