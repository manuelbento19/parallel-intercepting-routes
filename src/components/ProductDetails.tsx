import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  product: Product
}

export default function ProductDetails({product}:Props) {
  return (
    <article className="group block">
      <Image src={product.image} height={300} width={300} loading='lazy' alt={product.name} className="h-[350px] w-full  sm:h-[450px]"/>
      <div className="mt-3 flex flex-col gap-2 text-sm">
        <h3 className="text-gray-900">{product.name}</h3>
        <p className="max-w-lg text-pretty text-xs text-gray-500">{product.description}</p>
      </div>
  </article>
  )
}
