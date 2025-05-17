import { useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shopingSlice";
import { truncateText } from "../helpers/funk";
import SimilarProducts from "../components/SimilarProducts";
import { useProducts } from "../hooks/useProducts";

function ProductDetailPage() {
  const { data } = useProducts();
  const dispatch = useDispatch();
  const { id } = useParams();

  const findedProduct = data?.find((product) => product.id.toString() === id);

  const similarProducts = findedProduct
    ? data.filter(
        (item) =>
          item.category === findedProduct.category &&
          item.id !== findedProduct.id
      )
    : [];

  return (
    <div className="flex flex-col ">
      <div className=" flex gap-6 items-center justify-center w-[960px] h-[400px] mx-auto my-[60px]">
        <div className="w-1/2 flex items-center justify-center border border-gray-300  rounded-2xl shadow-xl ">
          <img
            className=" w-[370px] h-[406px] object-contain p-5"
            src={findedProduct?.image}
            alt={findedProduct?.title}
          />
        </div>

        <div className="flex flex-col h-[390px] w-1/2 gap-3">
          <h1 className="text-2xl font-bold line-clamp-1">
            {truncateText(findedProduct?.title, 3)}
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
            className="mt-6 w-fit px-4 py-2 bg-[#9B7D66] text-white rounded-xl "
          >
            + Add to card
          </button>
        </div>
      </div>
      <SimilarProducts similarProducts={similarProducts} />
    </div>
  );
}

export default ProductDetailPage;
