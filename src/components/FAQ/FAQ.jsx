import React from "react";

const faqData = [
  {
    question: "¿Quienes somos?",
    answer:
      "Un emprendimiento de tres hermanos apasionados por la cultura asiática, queremos traerte de primera mano los mejores sabores que te trasnporten hacia esos lugares mágicos.",
  },
  {
    question: "¿Que tipo de bebidas y snacks ofrecen?",
    answer:
      "Nuestra tienda ofrece una variedad de snacks y bebidas asiáticas, incluyendo opciones vegetarianas y veganas. Nuestro inventario incluye productos de países como Japón, Corea, China, Tailandia y Vietnam.",
  },
  {
    question: "¿Ofrecen envío a domicilio?",
    answer: "Por el momento no contamos con envío a domicilio.",
  },
  {
    question: "¿Puedo cancelar o cambiar mi pedido?",
    answer:
      "Por favor, contáctanos lo antes posible si necesitas cancelar o cambiar tu pedido. Nos esforzamos para mantener actualizado nuestro stock e inventario, pero se pueden hacer ajustes si es necesario.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Preguntas frecuentes
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
