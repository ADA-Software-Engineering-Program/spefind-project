import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function AppLayout({ children, backgroundColor }) {
  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      {children}
      <Footer />
    </div>
  );
}
