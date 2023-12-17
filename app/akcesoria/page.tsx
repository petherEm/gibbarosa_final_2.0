import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { simplifiedProduct } from "@/interface";
import YouMayLike from "@/components/YouMayLike";
import MidBanner from "@/components/MidBanner";
import Newsletter from "@/components/Newsletter";

async function getData() {
  const query = `*[_type == "product" && category->name == "Akcesoria"] {
    _id,
    isNewest,
    price,
    name,
    brand,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    "imageUrl2": images[1].asset->url
  }`;
  const data = await client.fetch(query);

  return data;
}

const AkcesoriaOnly = async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mt-20 flex flex-col-reverse flex-wrap justify-between md:items-center md:space-x-6 md:flex-row md:mb-16">
          <div className="flex flex-col w-full">
            <h2 className="h2">Akcesoria</h2>
            <p className="w-1/2 text-[#3E3E59] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              modi inventore velit a fugiat iure id nesciunt quod odio suscipit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              sunt?
            </p>
          </div>
        </div>

        {/* LISTING */}
        <div className="mt-20 flex flex-col-reverse flex-wrap justify-between md:items-center md:space-x-6 md:flex-row md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 space-x-8">
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
        </div>
      </section>
      {/* YOU MAY ALSO LIKE */}
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <YouMayLike />
      </section>
      {/* MID BANNER */}
      <MidBanner />
      <Newsletter />
    </div>
  );
};

export default AkcesoriaOnly;
