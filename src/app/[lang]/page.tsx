import { NavigationMenuComponent } from "@/components/Header/Header";
import Sections from "@/components/Sections/Sections";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

export default async function Home() {
  return (
    <>
      <div className="sticky top-0 start-0 end-0 bg-white z-10 shadow-md flex justify-center">
        <div className="container flex justify-between items-center p-4">
          <NavigationMenuComponent />
          <div className="text-xl font-semibold">الشعار</div>
        </div>
      </div>

      <div className="container py-2 mx-auto relative">
        {/* here section */}
        <Sections />

        {/* contact section */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}
