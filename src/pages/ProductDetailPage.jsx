import { useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import { textCutter } from "../helpers/funk";

function ProductDetailPage({ products }) {
  const { id } = useParams();
  console.log(id);
  const productsFind = products?.find(
    (product) => product.id.toString() === id
  );
  console.log(productsFind);
  return (
    <div className=" flex gap-6 items-center justify-center w-[960px] h-[500px] mx-auto ">
      <div className="w-1/2 flex items-center justify-center border border-gray-300  rounded-2xl shadow-xl ">
        <img
          className=" w-[370px] h-[406px] object-contain p-5"
          src={productsFind?.image}
          alt={productsFind?.title}
        />
      </div>

      <div className="flex flex-col h-[390px] w-1/2 gap-3">
        <h1 className="text-2xl font-bold line-clamp-1">
          {textCutter(productsFind?.title)}
        </h1>
        <div className="flex gap-4 ">
          <span className="text-sm bg-gray-300 rounded-full uppercase px-3 py-1">
            {productsFind?.category}
          </span>
          <RatingStar rating={productsFind?.rating} />
          <span>({productsFind?.rating.rate})</span>
        </div>
        <p className="text-xl font-semibold mt-2 text-[#9B7D66]">{productsFind?.price}$</p>
        <p className="mt-4 line-clamp-5">{productsFind?.description}</p>
        <button className="mt-6 w-fit px-4 py-2 bg-[#9B7D66] text-white rounded-xl">
          + Add to card
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
