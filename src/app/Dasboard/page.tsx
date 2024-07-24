import { getProducts } from "../api/products/route";
import { product } from "@/lib/types";

export default async function Dashboard() {
  const productData = getProducts();

  const [product] = await Promise.all([productData]);
  console.log(product);
  return (
    <div>
      {product.products.map((map: product) => (
        <div key={map.ID} className="text-yellow-500">
          {map.Ingredient}
        </div>
      ))}
    </div>
  );
}
