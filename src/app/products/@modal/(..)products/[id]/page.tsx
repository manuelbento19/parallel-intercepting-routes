import ProductDetails from '@/components/ProductDetails';
import React from 'react'
type Props = {
  params: {
    id: string;
  }
}

export default async function Page({params:{id}}:Props) {
  const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  const result = await response.json();

  return (
    <div className="fixed inset-0 z-10 size-full bg-black/60 backdrop-blur-sm flex justify-center items-center">
      {result?.product && <ProductDetails product={result.product}/>}
    </div>
  )
}
