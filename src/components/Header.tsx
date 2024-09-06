import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="flex items-center justify-between gap-8 container mx-auto">
        <Link href="/products" className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Products</Link>
        <a href="https://github.com/manuelbento19/parallel-intercepting-routes" target='_blank' className="inline-block rounded-lg border bg-white dark:bg-gray-700 p-2 text-center text-sm text-gray-500 dark:text-gray-200 outline-none transition duration-100 hover:bg-gray-100">
          Github
        </a>
      </div>
    </header>
  )
}
