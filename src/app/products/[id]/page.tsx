import ProductDetails from '@/components/ProductDetails';
import React from 'react'

type Props = {
    params: {
        id: string;
    }
}

export default async function Page({params}:Props) {
    const response = await fetch(`https://fakestoreapi.in/api/products/${params.id}`);
    const result = await response.json();

    return (
        <div className="h-full container mx-auto flex">
            {result?.product && <ProductDetails product={result.product}/>}
        </div>
    )
}

