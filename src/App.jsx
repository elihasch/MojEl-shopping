import { useEffect, useState } from "react";
import { api } from "./config/api";
import SearchProduct from "./components/SearchProduct";
import Layout from "./layouts/Layout";
import Card from "./components/Card";
import Category from "./components/Category";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  console.log(categorySelected);
  const searchedProducts = products.filter((item) => {
    const matchesSearch = search
      ? item.title.toLowerCase().includes(search.toLowerCase().trim())
      : true;
    const matchesCategory = categorySelected.length
      ? item.category === categorySelected
      : true;
    return matchesSearch && matchesCategory;
  });

  console.log("products", products);

  const categories = [...new Set(products.map((p) => p.category))];

  console.log("categories", categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex justify-between items-center">
          <Category setCategorySelected={setCategorySelected} categories={categories} />
          <SearchProduct search={search} setSearch={setSearch} />
        </div>
        <div className="flex flex-wrap gap-6 mt-5 ">
          {searchedProducts.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default App;
