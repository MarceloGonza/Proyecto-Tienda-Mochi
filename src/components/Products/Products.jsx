import React from "react";
import P1 from "../../assets/img1.png";
import P2 from "../../assets/img2.png";
import P3 from "../../assets/img3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image: P1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P3,
    delay: 1.1,
  },
  {
    id: 4,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P3,
    delay: 1.1,
  },
  {
    id: 5,
    title: "Orange Fanta",
    image: P1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
];

const Products = () => {
  // Solo mostramos los primeros 3 productos
  const visibleProducts = ProductsData.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Our Products
        </motion.h1>
        {/* card section - solo mostramos los primeros 3 productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProducts.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <div className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md">
                  $ 4.000
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Botón "More Products" */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/all-products")}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 duration-200"
          >
            More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
