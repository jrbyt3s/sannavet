import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
    title: 'Sannavet veterinaria, hacemos que tu mascota mejore',
    description: 'Veterinaria sannavet, vacunación de perros gatos, conejos, baños, se quitan pulgas y garrapatas, desparasitación de mascotas',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={montserrat.className}>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}