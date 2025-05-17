import { useState } from "react";
import Category from "../components/Category";
import SearchProduct from "../components/SearchProduct";
import Card from "../components/Card";
import Loader from "../components/modules/Loader";

function ProductsPage({ products, isFetching }) {
  const [search, setSearch] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  const filteredProducts = products?.filter((item) => {
    const matchesSearch = search
      ? item.title.toLowerCase().includes(search.toLowerCase().trim())
      : true;
    const matchesCategory = categorySelected.length
      ? item.category === categorySelected
      : true;
    return matchesSearch && matchesCategory;
  });
  const categories = [...new Set(products?.map((p) => p.category))];
  return (
    <div className="px-4">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <Category
          setCategorySelected={setCategorySelected}
          categories={categories}
        />
        <SearchProduct search={search} setSearch={setSearch} />
      </div>
      <div className="flex flex-wrap gap-6 mt-5 ">
        {isFetching ? (
          <Loader />
        ) : (
          filteredProducts.map((item) => <Card key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
