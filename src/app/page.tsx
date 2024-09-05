import Header from "@/components/Header"
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-900 px-4">
      <div className="container mx-auto">
       <Header/>
       <ProductList/>
      </div>
    </main>
  );
}
