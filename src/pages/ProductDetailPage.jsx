import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>hi id</h2>
    </div>
  );
}

export default ProductDetailPage;
