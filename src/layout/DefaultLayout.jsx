import Navbar from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-(--color-bg-main) text-(--color-text)">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
