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

            addToCart: (item) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (cartItem) => cartItem.id === item.id
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((cartItem) =>
                                cartItem.id === item.id
                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                    : cartItem
                            ),
                        };
                    } else {
                        return {
                            items: [...state.items, { ...item, quantity: 1 }],
                        };
                    }
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),

            increaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

            decreaseQuantity: (id) =>
                set((state) => {
                    const itemToDecrease = state.items.find(item => item.id === id);

                    if (itemToDecrease && itemToDecrease.quantity > 1) {
                        return {
                            items: state.items.map((item) =>
                                item.id === id
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                            ),
                        };
                    } else {
                        // Remove item if quantity is less than or equal to 1
                        return {
                            items: state.items.filter(item => item.id !== id),
                        };
                    }
                }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
