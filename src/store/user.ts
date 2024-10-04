import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (item) => {
                set((state) => {
                    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((cartItem) =>
                                cartItem.id === item.id
                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                    : cartItem
                            ),
                        };
                    }
                    return { cart: [...state.cart, { ...item, quantity: 1 }] };
                });
            },
            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((cartItem) => cartItem.id !== +id),
                }));
            },
            clearCart: () => {
                set(() => ({ cart: [] }));
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);