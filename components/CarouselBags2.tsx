import Image from "next/image";
import Link from "next/link";
import { simplifiedProduct } from "@/interface";
import { getAllProducts } from "@/lib/actions/product.actions";

const CarouselBags = async () => {
  const data: simplifiedProduct[] = await getAllProducts();

  return (
    <section className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <h2 className="h2">Ikoniczne torebki (from Sanity)</h2>
      <div className="flex items-center space-x-6 overflow-x-auto thin-scrollbar scroll-smooth">
        {data.map((item) => (
          <Link
            href={`/produkt/${item.slug}`}
            key={item._id}
            className="min-w-[310px] min-h-[530px] shadow-lg"
          >
            <Image
              src={item.imageUrl}
              width={310}
              height={414}
              alt={item.name}
              className="object-cover object-center"
            />
            <div className="p-4">
              <p className="text-lg">{item.brand}</p>
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="font-semibold">{item.price} PLN</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CarouselBags;
