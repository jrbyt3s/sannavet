import Image from "next/image";
import hero1 from "../../public/images/sannavet-cuidamos-a-tu-mascota-1.jpg"

const Hero = () => {
    return (
        <section className="bg-slate-200 p-5">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left lg:text-6xl xl:text-7xl">Veterinaria Sanna<span className="text-orange-500">Vet</span></h1>
            <p className="max-w-sm text-center text-slate-500 md:text-left text-lg lg:text-xl xl:text-2xl">Hacemos que tu mascota mejore</p>
            <p className="md:text-base text-sm font-semibold text-gray-400 mt-5">
              ¡Agenda una cita con nosotros! Visítanos y te brindaremos la mejor atención para el engreído del hogar.<br />
              Recuerda que es importante que tu mascota acuda al veterinario esporádicamente por prevención y no sólo para tratar algún mal.<br />
            </p>
          </div>
          <div className="flex flex-col my-10">
            <Image src={hero1} width={"360"} height={"360"} alt="sannavet-hero" objectFit="cover"/>
          </div>
        </div>
      </section>
      
    );
}

export default Hero;