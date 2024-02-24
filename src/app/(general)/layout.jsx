
import Hero from '../../components/Hero'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
export default function GeneralLayout({children
}) {
  return (
    <div>
    <Navbar/>
      <Hero/>
      <>{children}</>
      <Footer />
    </div>
  );
}