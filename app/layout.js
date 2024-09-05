import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Suraj Manjhi - Data Analytics",
  description:
    "I am Suraj Manjhi, a final-year B.Tech student majoring in Information Technology Sciences at the Institute of Technology & Management, Gwalior. With a solid foundation in data analysis, Python programming, and SQL, I have developed a keen interest in Data Science and Machine Learning. My academic projects and internships have provided me with hands-on experience in analyzing data, developing predictive models, and leveraging statistical techniques to solve real-world problems. I am eager to apply my skills in a dynamic environment and contribute to data-driven decision-making processes. I am actively seeking opportunities in Data Science, where I can continue to grow and make an impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
