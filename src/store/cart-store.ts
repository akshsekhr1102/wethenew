import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
};


export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            //TODO: Add item to the cart
            addToCart: (item) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (cartItem) => cartItem.id === item.id
                    );

                    if (existingItem) {
                        //TODO: Update quantity if the item is already in the cart
                        return {
                            items: state.items.map((cartItem) =>
                                cartItem.id === item.id
                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                    : cartItem
                            ),
                        };
                    } else {
                        //TODO: Add new item to the cart
                        return {
                            items: [...state.items, { ...item, quantity: 1 }],
                        };
                    }
                }),

            //TODO: Removed item from the cart
            removeFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),

            //TODO: Increaseees item quantity in the cart
            increaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

            //TODO: Decrease item quantity in the cartss
            decreaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                })),
        }),//TODO:Properly aceess the local storage
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
