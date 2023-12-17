"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { Trash2 } from "lucide-react";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const router = useRouter();

  //console.log(cartDetails);
  const items = Object.values(cartDetails ?? {}).map((entry) => entry.price_id);

  // async function handleCheckoutClick(event: any) {
  //   event.preventDefault();

  //   try {
  //     const result = await redirectToCheckout();
  //     if (result?.error) {
  //       console.log("result");
  //     }
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // }

  const onCheckout = async () => {
    console.log(items);
    try {
      const response = await axios.post("/api/checkout", {
        priceIds: items.map((item) => item.price_id),
      });
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

  const onP24NakedCheckout = async () => {
    console.log(totalPrice);
    try {
      const response = await axios.post("/api/pnaked", {
        amount: totalPrice, // Assuming '3232424' is your amount (as a number, not a string)
      });

      console.log(response.data);

      if (response.data.paymentUrl) {
        toast.success("Redirecting to payment...");
        window.location.href = response.data.paymentUrl; // Redirect to the payment URL
      } else {
        toast.error("Payment URL not received");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during checkout");
    }
  };

  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Koszyk</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">Twój koszyk jest pusty</h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="flex py-6 ">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={entry.image as string}
                            alt="Product Image"
                            width={100}
                            height={100}
                          />
                        </div>

                        <div className="ml-4">
                          <div>
                            <div className="">
                              <h3>{entry.name}</h3>
                              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                {entry.description}
                              </p>
                              <div className="mt-2 flex justify-between">
                                <p className="text-[12px] flex-1">
                                  {entry.size && (
                                    <span>Rozmiar: {entry.size}</span>
                                  )}
                                  {entry.color && (
                                    <span>Kolor: {entry.color}</span>
                                  )}
                                </p>
                                <div className="flex space-x-2">
                                  <p>PLN {entry.price}</p>
                                  <button
                                    onClick={() => removeItem(entry.id)}
                                    className=""
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
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
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Do zapłaty</p>
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
                  onClick={() => {
                    router.push("/koszyknew"), handleCartClick();
                  }}
                  className="w-full bg-black text-white"
                >
                  Do Kasy
                </Button>
              </div>

              {/* <div className="mt-6">
                <Button
                  onClick={onP24Checkout}
                  className="w-full bg-black text-white"
                >
                  Zapłać z Przelewy 24
                </Button>
              </div> */}

              {/* <div className="mt-6">
                <Button
                  onClick={onCheckout}
                  className="w-full bg-black text-white"
                >
                  Zapłać przez Stripe
                </Button>
              </div> */}

              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Button
                  className="w-full mt-4"
                  onClick={() => {
                    router.push("/"), handleCartClick();
                  }}
                >
                  Kontynuuj zakupy
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCartModal;
