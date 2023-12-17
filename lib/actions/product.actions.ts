"use server";

import { client } from "@/lib/sanity";

export async function getAllProducts() {
  const query = `*[_type == "product"] {
          _id,
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

export async function updatePaymentStatus(priceId: string) {
  try {
    // Query to find the product by price_id
    const query = `*[_type == "product" && price_id == $priceId][0]._id`;
    const params = { priceId };

    // Fetching the product ID
    const productId = await client.fetch(query, params);
    // Using Sanity Patch to update the 'payment' field of the specific product
    await client
      .patch(productId) // Document ID to patch
      .set({ payment: true, price: 1000 }) // Set the 'payment' field to true
      .commit();

    console.log(`Payment status updated for product ID: ${productId}`);
  } catch (error) {
    console.error("Error updating payment status:", error);
  }
}
