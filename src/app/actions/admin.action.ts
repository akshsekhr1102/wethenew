"use server"
import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";



export async function printTextAction(previousState: any, formData: FormData) {
    const text = formData.get("text")
    return {
        errors: {
            text: (!text) ? 'text is required' : undefined
        }
    }
}


export const addProduct = async (formData: Product) => {
    const newProduct = await prisma.product.create({
        data: {
            name: formData.name as string,
            price: formData.price,
            description: formData.description ?? null,
            slug: (formData.name as string)
                .toLowerCase()
                .trim()
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .replaceAll(" ", "-"),
            image: formData.image,
        },
    });
    revalidatePath("/dashboard", "page")
    return newProduct;
};

export const editProduct = async (formData: Omit<Product, "createdAt">) => {
    const updatedProduct = await prisma.product.update({
        where: { id: formData.id },
        data: {
            name: formData.name as string,
            price: formData.price,
            description: formData.description ?? null,
            slug: (formData.name as string)
                .toLowerCase()
                .trim()
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .replaceAll(" ", "-"),
            image: formData.image,
        },
    });
    revalidatePath("/dashboard", "page")
    return updatedProduct;
};

export const deleteProduct = async ({ id }: { id: number }) => {
    const deleteProduct = await prisma.product.delete({
        where: { id: id },
    })
    revalidatePath("/dashboard", "page")
    return deleteProduct
}