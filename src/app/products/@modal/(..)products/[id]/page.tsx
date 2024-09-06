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
    <div className="fixed inset-0 z-10 size-full bg-black/60 backdrop-blur-sm flex overflow-auto py-6 px-3">
      {result?.product && <ProductDetails product={result.product}/>}
    </div>
  )
}
