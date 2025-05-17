import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function SimilarProducts({ similarProducts }) {
  const navigate = useNavigate();

  return (
    <div className="px-10 mt-[100px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {similarProducts.map((item) => (
          <div >
            <SwiperSlide
             className="mx-auto"
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)}
            >
              <div className="p-4 border border-neutral-300 rounded-xl shadow ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain mx-auto"
                />
                <h3 className="mt-2 text-sm font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[#9B7D66] mt-1">${item.price}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default SimilarProducts;
