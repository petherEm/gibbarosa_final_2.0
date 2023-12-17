"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { updatePaymentStatus } from "@/lib/actions/product.actions";

const KoszykNew = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const items = Object.values(cartDetails ?? {}).map((entry) => entry.price_id);
  const randomSessionId = Math.floor(Math.random() * 9000000000) + 1000000000;
  console.log(cartDetails);

  const onCheckout = async () => {
    console.log(items);
    try {
      const requestBody = {
        priceIds: items,
      };
      console.log(requestBody);
      const response = await axios.post("/api/checkout", requestBody);
      console.log(response.data);
      toast.success(response.data.message);
      // removeAll();
      window.location = response.data.url;
    } catch (error: any) {
      toast.error("Troche Dupa");
    }
  };

  const onP24Checkout = async () => {
    console.log(items);
    try {
      fetch("/api/pcheckout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          randomSessionId: randomSessionId,
          amount: totalPrice,
          /* Your order details */
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Redirect the user to the payment URL
          if (data.paymentUrl) {
            window.location.href = data.paymentUrl;
          } else {
            console.error("Payment URL not received");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error
        });
    } catch (error: any) {
      toast.error("Troche Dupa");
    }
  };

  return (
    <section className="mt-20 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <h1 className="h1">Koszyk</h1>

      <div className="mt-12">
        <div className="">
          <ul>
            {cartCount === 0 ? (
              <p>Twój koszyk jest pusty</p>
            ) : (
              <>
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <li
                    key={entry.id}
                    className="flex items-center py-6 border-b-[1.5px] border-gray-500"
                  >
                    <div className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={entry.image as string}
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="grid grid-cols-3 text-base font-medium text-gray-900">
                          <h3>{entry.name}</h3>

                          <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                            {entry.description}
                          </p>
                          <p className="ml-4">{entry.price} PLN</p>
                        </div>

                        <div className="flex flex-col gap-y-2 text-sm">
                          {/* <p className="text-gray-500">QTY: {entry.quantity}</p> */}
                          <div>
                            <p className="">Rozmiar: S/M</p>
                            <p>Kolor: czerwień</p>
                          </div>
                          <div className="flex space-x-4">
                            <button
                              onClick={() => removeItem(entry.id)}
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Usuń z koszyka
                            </button>
                            <button
                              onClick={() => {
                                updatePaymentStatus(entry.id);
                              }}
                              type="button"
                              className="font-medium text-green-800 hover:text-green-800/80"
                            >
                              Zarezerwuj
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>

      {/* COUPONS AND PAYMENTS */}
      <div className="mt-12 flex justify-around">
        <div className="border border-red-800 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Masz voucher?</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Add your code for an instant cart discount
          </p>
          <p className="mt-0.5 text-sm text-gray-500">
            placeholder for coupon INPUT
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{totalPrice} PLN</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes are calculated at checkout
          </p>

          {/* <div className="mt-6">
                <Button
                  onClick={onP24NakedCheckout}
                  className="w-full bg-black text-white"
                >
                  Zapłać P24 (naked)
                </Button>
              </div> */}

          <div className="mt-6">
            <Button
              disabled={cartCount === 0}
              onClick={onP24Checkout}
              className="w-full bg-black text-white"
            >
              Zapłać z Przelewy 24
            </Button>
          </div>
          <div className="mt-6">
            <Button
              disabled={cartCount === 0}
              onClick={onCheckout}
              className="w-full bg-black text-white"
            >
              Zapłać przez Stripe
            </Button>
          </div>

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Button className="w-full mt-4">Kontynuuj zakupy</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoszykNew;
