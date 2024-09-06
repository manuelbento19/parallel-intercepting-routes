import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  product: Product
}

export default function ProductDetails({product}:Props) {
  return (
    <article className="m-auto group flex flex-col gap-3 bg-white dark:bg-gray-900 overflow-hidden border border-gray-600 shadow-md rounded-sm">
      <Image src={product.image} height={300} width={300} loading='lazy' alt={product.title} className="h-[350px] w-full  sm:h-[450px]"/>
      <div className="max-w-lg mt-3 flex flex-col gap-2 text-sm p-2">
        <h3 className="text-gray-900 dark:text-gray-200">{product.title}</h3>
        <p className="text-pretty text-xs text-gray-500 dark:text-gray-400">{product.description}</p>
      </div>
    </article>
  )
}
