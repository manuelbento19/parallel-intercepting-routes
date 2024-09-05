import Card from "@/components/Card";
import { Product } from "@/types";

export  default async function ProductList() {
  const response = await fetch("https://fakestoreapi.in/api/products");
  const result = await response.json();

  return (
    <section className="h-full py-3 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {result?.products?.map((product:Product)=> <Card key={product.id} product={product}/>)}
    </section>
  );
}
