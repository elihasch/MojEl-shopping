import { useEffect, useState } from "react";
import { api } from "./config/api";
import SearchProduct from "./components/SearchProduct";
import Layout from "./layouts/Layout";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase().trim())
  );

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
        <SearchProduct search={search} setSearch={setSearch} />

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
