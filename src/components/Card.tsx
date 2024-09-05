import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: Product
}

export default function Card({product}:Props) {
  return (
    <Link href={`/${product.id}`}>
      <article className="group relative flex overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <Image src={product.image} loading="lazy" alt={product.title} width={300} height={300} className="size-full transition duration-200 group-hover:scale-110" />
      </article>
    </Link>
  )
}
