import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-8 text-white">
      <div className="container">
        {/* Contenedor principal alineado con justify-between */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-8">
          {/* Company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6 text-center sm:text-left w-full sm:w-auto"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-14 h-auto mx-auto sm:mx-0"
            />
            <div>
              <p className="flex items-center gap-2 justify-center sm:justify-start">
                <FaPhone className="" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-1 mb-5 justify-center sm:justify-start">
                <FaMapLocation /> 102 Gral. Ohiggins Junín, Provincia de Mendoza
              </p>
            </div>
          </motion.div>

          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6 text-center sm:text-right w-full sm:w-auto"
          >
            <h1 className="text-center text-3xl font-bold pb-6">Follow us</h1>
            <div className="flex items-center justify-center sm:justify-end gap-3 pt-4 pr-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2025. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
