import React from "react";
import Map from '../components/Map';
const Ubicanos = () => {
    const address = 'Av. 13 de Enero, N° 2201-2213, San Juan de Lurigancho 15434, Perú';
    return (
        <>
        <div className="m-6">
            <h4>🕛 Horarios</h4>
            <p>Lunes a viernes: 9:00 am a 5:00 pm </p>
            <p>Sábado: 10:00 am a 3:00 pm</p>
            <p>Domingo: Cerrado</p>
            <p>📲 Nuestro número telefónico es: +1 (555) 123-4567</p>
            <p>🏦Direccion:
            </p>
            <p>Av. 13 de Enero, N° 2201-2213, San Juan de Lurigancho 15434, Perú</p>

            <Map address={address} />
        </div>
</>
    );
}

export default Ubicanos;