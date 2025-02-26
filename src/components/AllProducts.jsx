import { useNavigate } from "react-router-dom";
import { ProductsData } from "./Products/Products";

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-10">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <div
              key={item.id}
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
                <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
