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
            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                <div className="box contactus-form overflow-hidden">
                    <div className="box-body">
                        <iframe title="" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin" height="370" className="!border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Ubicanos;
