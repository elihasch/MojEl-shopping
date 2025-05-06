import { useState } from "react";
import SearchProduct from "./components/SearchProduct";
import Layout from "./layouts/Layout";
import Card from "./components/Card";
import Category from "./components/Category";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { data: products, isFetching } = useProducts();
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
    <>
      <Layout>
        <div className="flex justify-between items-center">
          <Category
            setCategorySelected={setCategorySelected}
            categories={categories}
          />
          <SearchProduct search={search} setSearch={setSearch} />
        </div>
        <div className="flex flex-wrap gap-6 mt-5 ">
          {isFetching ? (
            <div>Loading...</div>
          ) : (
            filteredProducts.map((item) => <Card key={item.id} {...item} />)
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
