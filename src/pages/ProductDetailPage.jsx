import { useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import { textCutter } from "../helpers/funk";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shopingSlice";

function ProductDetailPage({ products }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const findedProduct = products?.find(
    (product) => product.id.toString() === id
  );

  return (
    <div className=" flex gap-6 items-center justify-center w-[960px] h-[500px] mx-auto ">
      <div className="w-1/2 flex items-center justify-center border border-gray-300  rounded-2xl shadow-xl ">
        <img
          className=" w-[370px] h-[406px] object-contain p-5"
          src={findedProduct?.image}
          alt={findedProduct?.title}
        />
      </div>

      <div className="flex flex-col h-[390px] w-1/2 gap-3">
        <h1 className="text-2xl font-bold line-clamp-1">
          {textCutter(findedProduct?.title)}
        </h1>
        <div className="flex gap-4 ">
          <span className="text-sm bg-gray-300 rounded-full uppercase px-3 py-1">
            {findedProduct?.category}
          </span>
          <RatingStar rating={findedProduct?.rating} />
          <span>({findedProduct?.rating.rate})</span>
        </div>
        <p className="text-xl font-semibold mt-2 text-[#9B7D66]">
          {findedProduct?.price}$
        </p>
        <p className="mt-4 line-clamp-5">{findedProduct?.description}</p>
        <button
          onClick={() => dispatch(addItem(findedProduct))}
          className="mt-6 w-fit px-4 py-2 bg-[#9B7D66] text-white rounded-xl"
        >
          + Add to card
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
